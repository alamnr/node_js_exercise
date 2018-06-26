var fs = require('fs');
var https = require('https');
var options = {
  host: '127.0.0.1',
  port: 4001,
  method: 'GET',
  path: '/'/*,
  key: fs.readFileSync('client_key.pem'),
  cert: fs.readFileSync('client_cert.pem')*/
};

var request = https.request(options, function(response) {
   console.log('response.statusCode:', response.statusCode);
    console.log('res.socket.authorized:', res.socket.authorized);
  console.log('peer certificate:');
  console.log(res.socket.getPeerCertificate());
   response.on('data', function(data) {
     console.log('got some data back from the server:', data);
   });
});

//request.write('Hey!\n');
request.end();

/*var fs = require('fs');
var https = require('https');
var options = {
  host: 'google.com',
  method: 'GET',
  path: '/'
};
var req = https.request(options, function(res) {
  console.log('res.socket.authorized:', res.socket.authorized);
  console.log('peer certificate:');
  console.log(res.socket.getPeerCertificate());
});
req.end();*/