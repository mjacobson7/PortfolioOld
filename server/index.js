var app = require('./config/express.js')();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport()

var port = process.env.PORT || 7000;

app.listen(port, function() {
  console.log("Now listening to port number:", port);
})


app.post('/api/sendmail', function(req, res) {
  var user = req.body;

  transporter.sendMail({
    from: '"maxjacobson.me" <no-reply@maxjacobson.me>', // sender address
    to: 'mjacobson7@gmail.com', // list of receivers
    subject: 'New message from ' + user.name + '!', // Subject line
    html: '<p>' + user.message + '<p>' + '</br>' + '<p>' + user.email + '<p>'
  })

  res.status(200).json(user);

});
