const mongoose = require('mongoose');

// SCHEMA
const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Comment cannot be empty!'],
        maxlength: [280, 'Comment cannot have over 280 characters'],
        minlength: [2, 'Comment must have at least 2 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    video: {
        type: mongoose.Schema.ObjectId,
        ref: 'Video',
        required: [true, 'Comment must belong to a video.']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Comment must belong to a user.']
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// QUERY MIDDLEWARE
commentSchema.pre(/^find/, function(next) {
    // this.populate({
    //     path: 'post',
    //     select: 'title'
    // }).populate({
    //     path: 'user',
    //     select: 'name photo'
    // });

    this.populate({
        path: 'user',
        select: 'name photo'
    });
    next();
})

// MODEL
const Comment = new mongoose.model('Comment', commentSchema);

module.exports = Comment;