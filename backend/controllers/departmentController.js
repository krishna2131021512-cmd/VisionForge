const Department = require('../models/Department');
const { success, error } = require('../utils/apiResponse');

// @route  POST /api/departments  (admin only)
const createDepartment = async (req, res, next) => {
  try {
    const { name, description, contactEmail, contactPhone } = req.body;
    const exists = await Department.findOne({ name });
    if (exists) return error(res, 400, 'Department already exists');

    const department = await Department.create({ name, description, contactEmail, contactPhone });
    return success(res, 201, 'Department created', { department });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/departments
const getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.find();
    return success(res, 200, 'Departments fetched', { departments });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/departments/:id  (admin only)
const updateDepartment = async (req, res, next) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!department) return error(res, 404, 'Department not found');
    return success(res, 200, 'Department updated', { department });
  } catch (err) {
    next(err);
  }
};

module.exports = { createDepartment, getDepartments, updateDepartment };