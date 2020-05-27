const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

router.route('/')
.get(videoController.getAllVideos);

// router.route('/:id')
// .get(videoController.getVideo);

module.exports = router;