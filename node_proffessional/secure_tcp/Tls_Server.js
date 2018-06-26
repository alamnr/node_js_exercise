var tls = require('tls');
var fs  = require('fs');
var serverOptions = {
	/*key:  fs.readFileSync('./my_key.pem'),
  cert: fs.readFileSync('./my_certificate.pem')*/
  key:  fs.readFileSync('./keys/my_key.pem'),
  cert: fs.readFileSync('./keys/my_cert.pem')
};
var server = tls.createServer(serverOptions);

var port = 4001;
server.listen(port);


function secureConnectionListener(clientStream) {
  clientStream.on('data', function(data) {
    console.log('got some data from the client:', data);
  });
}
server.on('secureConnection', secureConnectionListener);


server.on('secureConnection', function(clientStream) {
  clientStream.write('Hey Hello!\n');
});

server.on('secureConnection', function(clientStream) {
  clientStream.on('data', function(data) {
    if (data.toString().trim().toLowerCase() === 'quit') {
      clientStream.end('Bye bye!');
    }
  });
});