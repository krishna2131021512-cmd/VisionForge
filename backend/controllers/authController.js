const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { success, error } = require('../utils/apiResponse');

// @route  POST /api/auth/register
const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password) {
      return error(res, 400, 'Name, email, and password are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return error(res, 400, 'User already exists with this email');
    }

    const user = await User.create({ name, email, password, phone, address });
    const token = generateToken(user._id, user.role);

    return success(res, 201, 'User registered successfully', { user, token });
  } catch (err) {
    next(err);
  }
};

// @route  POST /api/auth/login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return error(res, 400, 'Email and password are required');
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return error(res, 401, 'Invalid email or password');
    }

    const token = generateToken(user._id, user.role);
    return success(res, 200, 'Login successful', { user, token });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/auth/profile
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    return success(res, 200, 'Profile fetched', { user });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login, getProfile };