const express = require('express');
const router = express.Router();
const {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  voteIssue,
  addComment,
} = require('../controllers/issueController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/', protect, upload.single('image'), createIssue);
router.get('/', getIssues);
router.get('/:id', getIssueById);
router.put('/:id', protect, updateIssue);
router.delete('/:id', protect, deleteIssue);
router.post('/:id/vote', protect, voteIssue);
router.post('/:id/comment', protect, addComment);

module.exports = router;