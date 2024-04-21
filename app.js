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
var searchRouter = require('./routes/search');
var helpRouter = require('./routes/help');
var aboutRouter = require('./routes/about');
var sellRouter = require('./routes/sell');
var readRouter = require('./routes/read');
var checkoutRouter = require('./routes/checkout');
var profileRouter = require('./routes/profile');
var settingsRouter = require('./routes/settings');
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
app.use('/search', searchRouter);
app.use('/help', helpRouter);
app.use('/about', aboutRouter);
app.use('/sell', sellRouter);
app.use('/read', readRouter);
app.use('/checkout', checkoutRouter);
app.use('/profile', profileRouter);
app.use('/settings', settingsRouter);

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
