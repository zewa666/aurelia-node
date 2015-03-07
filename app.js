var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');

/*var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

// view engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var api = require('./routes/api');
app.use('/', api);

var debug = require('debug')('aurelia-node');

app.set('port', process.env.PORT || 9000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});



module.exports = app;
