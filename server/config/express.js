var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function() {

  var app = express();

  app.use(express.static(__dirname + '/../../public'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));

  return app;

}
