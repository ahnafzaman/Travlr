require('dotenv').config();
console.log("JWT_SECRET Loaded:", process.env.JWT_SECRET); 

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


require('./app_api/models/tripModel');
require('./app_api/models/userModel'); 

const indexRouter = require('./app_server/routes/index');
const aboutRouter = require('./app_server/routes/about');
const contactRouter = require('./app_server/routes/contact');
const newsRouter = require('./app_server/routes/news');
const roomsRouter = require('./app_server/routes/rooms');
const mealsRouter = require('./app_server/routes/meals');
const travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_api/routes/index'); 


const authRouter = require('./app_api/routes/authRoutes'); 

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Failed to connect to MongoDB: ${err.message}`);
});

const Trip = mongoose.model('Trip'); 
const User = mongoose.model('User'); 
console.log('Trip model registered:', Trip !== undefined);
console.log('User model registered:', User !== undefined);

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);
app.use('/meals', mealsRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter); // API routes


app.use('/auth', authRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Set port and start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
