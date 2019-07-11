var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var mysql = require('mysql');
var bodyParser = require('body-parser');

// Connection with MySql
var db = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "dev123",
  database: "HouseRental"
});

db.connect(function(err) {
  if (err){ console.log(err);
  console.log("failed connection to mysql") }
  else 
  console.log("Connected!");
});
global.db = db;

<<<<<<< HEAD
// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
=======
//To parse body requests
app.use(bodyParser());
>>>>>>> routing

// Route for login
// Route for user sign up
var userRoute = require('./routes/User');
app.use('/user', userRoute);

// var testRoute = require('./routes/test');
// app.use('/test', testRoute);

// Route for list of houses by search filter
var propertyRoute = require('./routes/property');
app.use('/property', propertyRoute);

// Route for insert house
<<<<<<< HEAD
// Route for consult a house
// Route for delete house
// Route for update house
var propertyRoute = require('./routes/Property');
app.use('/property', propertyRoute);
=======
// var insertRoute = require('./routes/property');
// app.use('/user', insertRoute);

// // Route for consult a house
// var userRoute = require('./routes/User');
// app.use('/user', userRoute);

// // Route for delete house
// var userRoute = require('./routes/User');
// app.use('/user', userRoute);

// // Route for update house
// var userRoute = require('./routes/User');
// app.use('/user', userRoute);
>>>>>>> routing

var httpServer = http.createServer(app);

// Start the server
httpServer.listen(3000, function(){
  console.log('http running on: 3000');
});