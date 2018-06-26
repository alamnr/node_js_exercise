var fs = require('fs');
var options = {
    /*key: fs.readFileSync('/path/to/my/private_key.pem'),
    cert: fs.readFileSync('/path/to/my/certificate.pem')*/
    key: fs.readFileSync('./keys/my_key.pem'),
    cert: fs.readFileSync('./keys/my_cert.pem')
};

console.log(options);
var tls = require('tls');
var host = 'localhost';
var port = 4001;
/*var client = tls.connect(port, host, options, function() {
  console.log('connected');
});*/

var client = tls.connect(port, host, options, function() {

    console.log('authorized: ' + client.authorized);
    if (!client.authorized) {
        console.log('client denied access:', client.authorizationError);
    } else {
        console.log('connected');
        client.write('Hey, hello!');
    }
    client.on('data', function(data) {
        console.log('got some data from the server:', data);
    });
});