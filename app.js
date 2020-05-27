const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const videoRouter = require('./routes/videoRoutes');
const userRouter = require('./routes/userRoutes');
const commentRouter = require('./routes/commentRoutes');

const app = express();

// Setting up cors config
app.use(cors({credentials: true, origin: 'http://localhost:8080'}));
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
//     res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Limit requests from same IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' })); // BODY PARSER
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS attacks
app.use(xss());

app.use(compression());

// Test middlware
app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});

app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/comments', commentRouter);

app.all('*', (req, res, next) => { // Non-specified url error handler
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;