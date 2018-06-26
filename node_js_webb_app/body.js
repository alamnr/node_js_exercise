var connect = require('connect');
var app = connect();
// setup the middlewares
//app.use(connect.logger(':method :req[content-type]'));
//app.use(connect.bodyParser());
app.use('body-parser');
// actually respond
app.use(function(req, res) {
  res.end(JSON.stringify(req.body));
});
app.listen(8080);