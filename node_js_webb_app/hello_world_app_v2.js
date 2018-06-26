var connect = require('connect');

var http = require('http');


// import middleware

var replyText = require('./reply_text');

var app  =  connect();

app.use(replyText('Hellow World'));

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
/*var app = connect.createServer(replyText('Hellow World'));

app.listen(8080);*/

