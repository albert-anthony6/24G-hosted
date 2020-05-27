const Video = require('../models/videoModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllVideos = catchAsync(async (req, res) => {
    const videos = await Video.find().populate('comments');

    res.status(200).json({
        status: 'success',
        results: videos.length,
        data: {
            videos
        }
    });
});

// exports.getVideo = catchAsync(async (req, res, next) => {
//     const video = await Video.findById(req.params.id);

//     if (!video) {
//         return next(new AppError('No video found with that ID', 404));
//     }

//     res.status(200).json({
//         status: 'success',
//         data: {
//             video
//         }
//     });
// });