var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var crypto = require('crypto');
// var routes = require('./controllers/index');
var users = require('./controller/users');
mongoose.connect('mongodb://127.0.0.1:27017/mycollection');



// var routes = require('./routes/index');
// //var users = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
 app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//app.set('views', __dirname);
//app.use('/', express.static(__dirname + '/'));
app.use(express.static(path.join(__dirname, 'html')));


// app.get('/items',users.index);
// app.get('/items/:id',users.read);
// app.post('/items',users.create);
// app.put('/items/:id',users.update)
// app.delete('/items/:id',users.delete);

app.get('/employees',users.index);
app.get('/employees/:id',users.read);
app.post('/employees',users.create);
app.put('/employees/:id',users.update)
app.delete('/employees/:id',users.delete);

// app.get('/',routes.show);



//app.use('/', routes);
require("./routes")(app)
//app.use('/users', users);
 //app.use('/display', display);
 var connect = require('connect');
var methodOverride = require('method-override');
 app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));

app.listen(8000);

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



// module.exports = app;