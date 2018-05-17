/*var http = require('http');

var mongoose = require('mongoose');
Project = require('./api/models/app_config_models');
mongoose.connect('mongodb://localhost/Tododb');

var path = require('path');
var express = require('express');


var app = express();

var routes = require('./api/routes/app_config_routes');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8000); //the server object listens on port 8080
*/

var http = require('http');
var express = require('express'),
port = process.env.PORT || 3000;
server = http.createServer();
var app = express();
var mongoose = require('mongoose');
var Project = require('./api/models/app_config_models'); //created model loading here
var bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/app_config_routes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);