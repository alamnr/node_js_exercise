var request = require('request');
var inspect = require('util').inspect;
/*request(
    'http://localhost:4001/abc/def',
    function(err, res, body) {
        if (err) { throw err; }
        console.log(inspect({
            err: err,
            res: {
                statusCode: res.statusCode
            },
            body: JSON.parse(body)
        }));
    }
);*/

/*request(
    'http://localhost:4001/redirect',
    function(err, res, body) {
        if (err) { console.log(err); throw err; } else {
            console.log(inspect({
                err: err,
                res: {
                    statusCode: res.statusCode
                },
                body: JSON.parse(body)
            }));
        }

    });*/
/*
request.post(
    'http://localhost:4001/abc/def',
    function(err, res, body) {
        if (err) {console.log(err); throw err; }
        console.log(inspect({
            err: err,
            res: {
                statusCode: res.statusCode
            },
            body: JSON.parse(body)
        }));
    });*/

var options = {
    url: 'http://localhost:4001/abc/def',
    method: 'PUT'
};
request(options, function(err, res, body) {
    if (err) { console.log(err);//throw err;
     }
    else{console.log(inspect({
        err: err,
        res: {
            statusCode: res.statusCode
        },
        body: body
    }));}
    
});