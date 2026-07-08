const express = require('express');
const router = express.Router();
const {
  getUserById,
  updateProfile,
  getNotifications,
  readNotification,
  getAllUsers,
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/notifications', protect, getNotifications);
router.put('/notifications/:id/read', protect, readNotification);
router.put('/profile', protect, upload.single('profileImage'), updateProfile);
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:id', protect, getUserById);

module.exports = router;