const User = require('../models/User');
const { getUserNotifications, markAsRead } = require('../services/notificationService');
const { success, error } = require('../utils/apiResponse');

// @route  GET /api/users/:id
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return error(res, 404, 'User not found');
    return success(res, 200, 'User fetched', { user });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/users/profile
const updateProfile = async (req, res, next) => {
  try {
    const { name, phone, address } = req.body;
    const user = await User.findById(req.user._id);

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    if (req.file) user.profileImage = req.file.path;

    await user.save();
    return success(res, 200, 'Profile updated', { user });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/users/notifications
const getNotifications = async (req, res, next) => {
  try {
    const notifications = await getUserNotifications(req.user._id);
    return success(res, 200, 'Notifications fetched', { notifications });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/users/notifications/:id/read
const readNotification = async (req, res, next) => {
  try {
    const notification = await markAsRead(req.params.id, req.user._id);
    if (!notification) return error(res, 404, 'Notification not found');
    return success(res, 200, 'Notification marked as read', { notification });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/users  (admin only)
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return success(res, 200, 'Users fetched', { count: users.length, users });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserById, updateProfile, getNotifications, readNotification, getAllUsers };