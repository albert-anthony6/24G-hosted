const express = require('express');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
.get(commentController.getAllComments)
.post(authController.protect, commentController.createComment)
.delete(authController.protect, commentController.deleteComment);

module.exports = router;