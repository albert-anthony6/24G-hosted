const mongoose = require('mongoose');
const slugify = require('slugify');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Video must have a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Video title must be less than or equal to 40 characters'],
        minlength: [2, 'Video title must have at least 2 characters']
    },
    views: {
        type: Number,
        default: 300,
        min: [true, 'Videos cannot have below zero likes.']
    },
    likes: {
        type: Number,
        default: 172,
        min: [true, 'Videos cannot have below zero likes.']
    },
    dislikes: {
        type: Number,
        default: 3,
        min: [true, 'Videos cannot have below zero dislikes.']
    },
    slug: String,
    video: {
        type: String,
        required: [true, 'Video must have a path']
    },
    thumb: {
        type: String,
        require: [true, 'Video must have a thumbnail']
    },
    commentsQuantity: {
        type: Number,
        default: 0,
        min: [0, 'commentsQuantity cannot be below zero']
    },
    createdAt: {
        type: Date,
        default: Date.now() // mongoose converts this to current date format instead of ms
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// VIRTUAL POPULATE
videoSchema.virtual('comments', {
    ref: 'Comment',
    foreignField: 'video',
    localField:'_id'
});

// DOCUMENT MIDDLEWARE
// Will only work for documents that are being saved to DB i.e. .save() or .create()
videoSchema.pre('save', function(next) {
    this.slug = slugify(this.title, { lower: true });
    next();
});

// MODEL
const Video = mongoose.model('Video', videoSchema);

// SAVING DOCS TO DB AND MAKING SURE VALIDATORS WORK
// const testVideo = new Video({
//     title: 'Future of Drones',
//     video: 'https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4',
//     thumb: 'https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.jpg'
// });

// testVideo.save().then(doc => console.log(doc)).catch(err => console.log(err))

module.exports = Video;