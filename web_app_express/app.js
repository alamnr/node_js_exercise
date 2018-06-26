/**
 * Module dependencies.
 */
/*var express = require('express'),
	http = require('http');
    routes = require('./routes');
var app = module.exports = http.createServer(app);
// Configuration
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});
app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function() {
    app.use(express.errorHandler());
});
// Routes
app.get('/', routes.index);
app.listen(3000, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port,
        app.settings.env);
});*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use middleware

app.use(bodyParser());
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'bower_components')));

// define routes

app.use(require('./routes/index'));
app.use(require('./routes/json_routes'));

//  start server
var  port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log('Ready on port'+ port);
});