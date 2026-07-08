const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['Road', 'Electricity', 'Drainage', 'Water', 'Garbage', 'Other'],
      default: 'Other',
    },
    image: { type: String, default: '' },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium',
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
      default: 'Pending',
    },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

issueSchema.virtual('voteCount').get(function () {
  return this.votes.length;
});

issueSchema.set('toJSON', { virtuals: true });
issueSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Issue', issueSchema);