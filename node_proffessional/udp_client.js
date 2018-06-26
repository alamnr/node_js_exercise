var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('this is a message');
//client.send(message, 0, message.length, 4000, 'localhost');

client.send(message,
    0,
    message.length,
    4000,
    'localhost',
    function(err, bytes) {
        if (err) { throw err; }
        //client.close();
    }
);

client.on('message', function(message) {
  console.log('Got message back:', message.toString());
});

