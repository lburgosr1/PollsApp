'use strict';
var express = require('express');
var routes = require('./routes');
var router = require('./routes/router');
var http = require('http');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var routes = require('./routes/router');
//var users = require('./routes/users');
//var index = require('./routes/index');
//var list = require('./routes/users');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', router.index);
//app.use('/users', users);
//app.use('/', index);

app.get('/polls/polls', router.list);
app.get('/polls/:id', router.poll);
app.post('/polls', router.create);

var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', router.vote);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

	module.exports = {app: app, server: server};