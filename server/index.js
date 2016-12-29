var app = require('./config/express.js')();
var port = process.env.PORT || 6000;

app.listen(port, function() {
  console.log("Now listening to port number:", port);
})
