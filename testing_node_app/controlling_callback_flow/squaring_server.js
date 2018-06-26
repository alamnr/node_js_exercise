var port = process.argv[2] && parseInt(process.argv[2], 10) || 8080;
/*console.log(process.argv[2] && parseInt(process.argv[2], 10) || 8080);
console.log(process.argv[2]);
console.log(parseInt(process.argv[2], 10));*/

require('http').createServer(function(req, res) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(data) {
        body += data;
    });
    req.once('end', function() {
        if (body != '') {
            var number = JSON.parse(body);
            var squared = Math.pow(number, 2);
            res.end(JSON.stringify(squared));
        }
        else{
        	res.end('Server is up and running');
        }

    });
}).listen(port, function() {
    console.log('Squaring Server listening on port %d', port);
});