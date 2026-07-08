const express = require('express');
const router = express.Router();
const { getAnalytics, getDashboard } = require('../controllers/analyticsController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/analytics', protect, authorize('admin', 'department'), getAnalytics);
router.get('/dashboard', protect, authorize('admin', 'department'), getDashboard);

module.exports = router;