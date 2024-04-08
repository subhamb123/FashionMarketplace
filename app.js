var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const sequelize = require('./db')
const User = require('./models/User')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menswearRouter = require('./routes/menswear');
var womenswearRouter = require('./routes/womenswear');
var sneakersRouter = require('./routes/sneakers');
var collectionsRouter = require('./routes/collections');
var searchRouter = require('./routes/search');
var helpRouter = require('./routes/help');
var aboutRouter = require('./routes/about');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'wsu489',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menswear', menswearRouter);
app.use('/womenswear', womenswearRouter);
app.use('/sneakers', sneakersRouter);
app.use('/collections', collectionsRouter);
app.use('/search', searchRouter);
app.use('/help', helpRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelize.sync().then(()=>{
  console.log("Sequelize Sync Completed...");
})


module.exports = app;
