const express = require('express');
const router = express.Router();
const {
  createDepartment,
  getDepartments,
  updateDepartment,
} = require('../controllers/departmentController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('admin'), createDepartment);
router.get('/', getDepartments);
router.put('/:id', protect, authorize('admin'), updateDepartment);

module.exports = router;