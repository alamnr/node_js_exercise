var tls = require('tls');
var fs = require('fs');
var port = 4001;

var clients = [];

var options = {
    key: fs.readFileSync('server_key.pem'),
    cert: fs.readFileSync('server_cert.pem'),
    ca: [fs.readFileSync('fake_ca_client_cert.pem')],
    requestCert: true,
    rejectUnauthorized: true
};

function distribute(from, data) {
    console.log('I am here in distribute');
    var socket = from.socket;
    clients.forEach(function(client) {
        if (client !== from) {
            client.write(socket.remoteAddress + ':' + socket.remotePort + ' said :' + data);
        }
    });
}

var server = tls.createServer(options, function(client) {

    console.log('client.authorized:', client.authorized);
    clients.push(client);
    client.on('data', function(data) {
        console.log('here');
        distribute(client, data);
    });
    client.on('close', function() {
        console.log('closed connection');
        clients.splice(clients.indexOf(client), 1);
    });
});
server.listen(port, function() {
    console.log('listening on port',server.address() + ' : '+ server.address().port);
});