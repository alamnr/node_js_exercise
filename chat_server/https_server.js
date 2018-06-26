var fs = require('fs');
var https = require('https');

var options = {
    key: fs.readFileSync('server_key.pem'),
    cert: fs.readFileSync('server_cert.pem'),
    requestCert: true/*,
    rejectUnauthorized: true*/
};

var server = https.createServer(options, function(req, res) {
	 console.log('authorized:', req.socket.authorized);
	  console.log('client certificate:', req.socket.getPeerCertificate());
    res.writeHead(200, { 'Content-Type': 'text/plain ' });
    res.end('Hello World!');
});

/*
var port = 4001;
server.listen(port,function() {
  console.log('Server is listening on port', server.address().port);
});*/

port = 4001;
var address = '127.0.0.1';
//server.listen(port, address);

server.listen(port, address, function() {
  console.log('Server is listening on port', server.address().port);
});