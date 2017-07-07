/**
 * Created by KishikawaItaru on 2017/06/16.
 */
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var routes = require(__dirname + "/routes/back/user/index");



// view engine setup
app.set('public', path.join(__dirname, '/public'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//call index.js(back end)
app.use("/api", routes);

//app.use(function(req, res){});
app.use("/",function(req, res) {

    res.sendFile(path.join(__dirname, 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next)
{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development')
{
    app.use(function(err, req, res, next)
    {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next)
{
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;