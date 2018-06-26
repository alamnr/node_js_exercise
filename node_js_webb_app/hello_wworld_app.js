var connect = require('connect');

// import middleware

var helloWorld = require('./helloworld');

var app = connect.createServer(helloworld);
app.listen(8080);