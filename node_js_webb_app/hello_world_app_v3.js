var connect = require('connect');

var http = require('http');

// import middlewares

var writeHeader = require('./write_header');
var replyText = require('./reply_text');


var app  =  connect();

app.use(writeHeader('X-Powered-By', 'Node'));
app.use(replyText('Hello World'));

http.createServer(app).listen(8080);

/*

createServer is not part of connect module.It is part http module.You should include it.

Connect is an extensible HTTP server framework for node using "plugins" known as middleware

var http = require('http');

then use connect module to create app.

var app = connect();
app.use('/foo', function fooMiddleware(req, res) {

});

then create http server using this way.

http.createServer(app).listen(3000);

*/
// Obsolete code
/*var app = connect.createServer(writeHeader('X-Powered-By', 'Node'),replyText('Hello World'));

app.listen(8080);*/

