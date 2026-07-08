const Issue = require('../models/Issue');
const { success } = require('../utils/apiResponse');

// @route  GET /api/analytics
const getAnalytics = async (req, res, next) => {
  try {
    const totalIssues = await Issue.countDocuments();
    const pending = await Issue.countDocuments({ status: 'Pending' });
    const inProgress = await Issue.countDocuments({ status: 'In Progress' });
    const resolved = await Issue.countDocuments({ status: 'Resolved' });
    const rejected = await Issue.countDocuments({ status: 'Rejected' });

    const categoryCount = await Issue.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const departmentPerformance = await Issue.aggregate([
      { $match: { department: { $exists: true } } },
      {
        $group: {
          _id: '$department',
          totalAssigned: { $sum: 1 },
          resolved: {
            $sum: { $cond: [{ $eq: ['$status', 'Resolved'] }, 1, 0] },
          },
        },
      },
      {
        $lookup: {
          from: 'departments',
          localField: '_id',
          foreignField: '_id',
          as: 'departmentInfo',
        },
      },
      { $unwind: '$departmentInfo' },
      {
        $project: {
          name: '$departmentInfo.name',
          totalAssigned: 1,
          resolved: 1,
          resolutionRate: {
            $cond: [
              { $eq: ['$totalAssigned', 0] },
              0,
              { $multiply: [{ $divide: ['$resolved', '$totalAssigned'] }, 100] },
            ],
          },
        },
      },
    ]);

    return success(res, 200, 'Analytics fetched', {
      totalIssues,
      statusBreakdown: { pending, inProgress, resolved, rejected },
      categoryCount,
      departmentPerformance,
    });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/dashboard
const getDashboard = async (req, res, next) => {
  try {
    const recentIssues = await Issue.find()
      .populate('reportedBy', 'name')
      .populate('department', 'name')
      .sort({ createdAt: -1 })
      .limit(10);

    const criticalIssues = await Issue.countDocuments({ priority: 'Critical', status: { $ne: 'Resolved' } });
    const totalUsers = await require('../models/User').countDocuments();

    return success(res, 200, 'Dashboard fetched', {
      recentIssues,
      criticalIssues,
      totalUsers,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAnalytics, getDashboard };