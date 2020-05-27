const Comment = require('../models/commentModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllComments = catchAsync(async (req, res, next) => {
    const comments = await Comment.find();

    res.status(200).json({
        status: 'success',
        results: comments.length,
        data: {
            comments
        }
    });
});

exports.createComment = catchAsync(async (req, res, next) => {
    const newComment = await Comment.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            comment: newComment
        }
    });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
    await Comment.deleteOne(req.body);

    res.status(200).json({
        status: 'success',
        data: null
    });
});