var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// 引入session模块 储存到mongodb中
var mongoose = require("mongoose");
var dbUrl = "mongodb://127.0.0.1:27017/testmongo";
mongoose.connect(dbUrl);
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// session的引入
app.use(session({
    secret : "microblog",
    resave : true,
    saveUninitialized: true,
    store : new mongoStore({
      url : dbUrl
    })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
