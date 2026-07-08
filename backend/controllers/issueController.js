const Issue = require('../models/Issue');
const Comment = require('../models/Comment');
const Department = require('../models/Department');
const { classifyIssueImage } = require('../services/aiService');
const { calculatePriority } = require('../services/priorityService');
const { createNotification, sendStatusUpdate } = require('../services/notificationService');
const { success, error } = require('../utils/apiResponse');

// @route  POST /api/issues
const createIssue = async (req, res, next) => {
  try {
    const { title, description, latitude, longitude } = req.body;
    const imageUrl = req.file ? req.file.path : '';

    if (!title || !description || !latitude || !longitude) {
      return error(res, 400, 'Title, description, and location are required');
    }

    let category = 'Other';
    let confidence = 0.5;

    if (imageUrl) {
      const aiResult = await classifyIssueImage(imageUrl);
      category = aiResult.category;
      confidence = aiResult.confidence;
    }

    const priority = calculatePriority({ category, confidence, voteCount: 0 });
    const department = await Department.findOne({ name: category });

    const issue = await Issue.create({
      title,
      description,
      category,
      image: imageUrl,
      location: { latitude, longitude },
      priority,
      department: department ? department._id : undefined,
      reportedBy: req.user._id,
    });

    return success(res, 201, 'Issue created successfully', { issue });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/issues
const getIssues = async (req, res, next) => {
  try {
    const { status, category, department } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (department) filter.department = department;

    const issues = await Issue.find(filter)
      .populate('reportedBy', 'name email')
      .populate('department', 'name')
      .sort({ createdAt: -1 });

    return success(res, 200, 'Issues fetched', { count: issues.length, issues });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/issues/:id
const getIssueById = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate('reportedBy', 'name email')
      .populate('department', 'name')
      .populate({ path: 'comments', populate: { path: 'userId', select: 'name' } });

    if (!issue) return error(res, 404, 'Issue not found');

    return success(res, 200, 'Issue fetched', { issue });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/issues/:id
const updateIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return error(res, 404, 'Issue not found');

    const isOwner = issue.reportedBy.toString() === req.user._id.toString();
    const isPrivileged = ['admin', 'department'].includes(req.user.role);
    if (!isOwner && !isPrivileged) {
      return error(res, 403, 'Not authorized to update this issue');
    }

    const { title, description, status, department, priority } = req.body;

    if (title) issue.title = title;
    if (description) issue.description = description;
    if (priority && isPrivileged) issue.priority = priority;
    if (department && isPrivileged) issue.department = department;

    if (status && isPrivileged) {
      issue.status = status;
      await sendStatusUpdate(issue.reportedBy, issue.title, status);
    }

    await issue.save();
    return success(res, 200, 'Issue updated', { issue });
  } catch (err) {
    next(err);
  }
};

// @route  DELETE /api/issues/:id
const deleteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return error(res, 404, 'Issue not found');

    const isOwner = issue.reportedBy.toString() === req.user._id.toString();
    if (!isOwner && req.user.role !== 'admin') {
      return error(res, 403, 'Not authorized to delete this issue');
    }

    await Comment.deleteMany({ issueId: issue._id });
    await issue.deleteOne();

    return success(res, 200, 'Issue deleted');
  } catch (err) {
    next(err);
  }
};

// @route  POST /api/issues/:id/vote
const voteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return error(res, 404, 'Issue not found');

    const userId = req.user._id.toString();
    const alreadyVoted = issue.votes.some((v) => v.toString() === userId);

    if (alreadyVoted) {
      issue.votes = issue.votes.filter((v) => v.toString() !== userId);
    } else {
      issue.votes.push(req.user._id);
    }

    issue.priority = calculatePriority({
      category: issue.category,
      confidence: 0.7,
      voteCount: issue.votes.length,
    });

    await issue.save();
    return success(res, 200, alreadyVoted ? 'Vote removed' : 'Vote added', {
      voteCount: issue.votes.length,
    });
  } catch (err) {
    next(err);
  }
};

// @route  POST /api/issues/:id/comment
const addComment = async (req, res, next) => {
  try {
    const { message } = req.body;
    if (!message) return error(res, 400, 'Comment message is required');

    const issue = await Issue.findById(req.params.id);
    if (!issue) return error(res, 404, 'Issue not found');

    const comment = await Comment.create({
      issueId: issue._id,
      userId: req.user._id,
      message,
    });

    issue.comments.push(comment._id);
    await issue.save();

    if (issue.reportedBy.toString() !== req.user._id.toString()) {
      await createNotification(
        issue.reportedBy,
        'New Comment',
        `${req.user.name} commented on your issue "${issue.title}"`
      );
    }

    return success(res, 201, 'Comment added', { comment });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  voteIssue,
  addComment,
};