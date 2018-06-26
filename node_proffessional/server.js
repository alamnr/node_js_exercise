

var http = require('http');
var server = http.createServer();

server.on('request', function (req, res){
	res.writeHead(200, {'contentType':'text/plain'});
	res.write('Hello World  ta  tata ');
	console.log('Hello World');
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	res.end();
});

server.listen(4000);