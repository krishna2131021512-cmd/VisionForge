const Notification = require('../models/Notification');

const createNotification = async (userId, title, message) => {
  return Notification.create({ userId, title, message });
};

const markAsRead = async (notificationId, userId) => {
  return Notification.findOneAndUpdate(
    { _id: notificationId, userId },
    { isRead: true },
    { new: true }
  );
};

const getUserNotifications = async (userId) => {
  return Notification.find({ userId }).sort({ createdAt: -1 });
};

const sendStatusUpdate = async (userId, issueTitle, newStatus) => {
  const title = 'Issue Status Updated';
  const message = `Your issue "${issueTitle}" is now marked as "${newStatus}".`;
  return createNotification(userId, title, message);
};

module.exports = { createNotification, markAsRead, getUserNotifications, sendStatusUpdate };