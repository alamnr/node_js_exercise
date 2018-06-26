var express = require('express');
var app = express();
var server =  require('http').createServer(app);
var io = require('socket.io').listen(server);

var users=[], connections=[];

server.listen(process.env.PORT||3000);
console.log('Server is running...');

app.get('/', function(req,res){
	res.sendFile(__dirname+'/index_new.html');
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Connected:  %s sockects connected.', connections.length);

	// disconnect
	socket.on('disconnect', function(data){
		
		users.splice(users.indexOf(socket.userName),1);
		updateUserNames();
		connections.splice(connections.indexOf(socket),1);
		console.log('Disconnected: %s socket disconnected ' ,  connections.length);
	});

	// send message
	socket.on('send message', function(data){
		console.log(data);
		io.sockets.emit('new message', {msg:data, user: socket.userName});
	});

	// New User 
	socket.on('new user', function(data, callback){
		callback(true);
		socket.userName = data;
		users.push(socket.userName);
		updateUserNames();

	});	

	function updateUserNames(){
		io.sockets.emit('get users', users);
	}
});

