const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ['Road', 'Electricity', 'Drainage', 'Water', 'Garbage'],
    },
    description: { type: String, default: '' },
    contactEmail: { type: String, default: '' },
    contactPhone: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Department', departmentSchema);