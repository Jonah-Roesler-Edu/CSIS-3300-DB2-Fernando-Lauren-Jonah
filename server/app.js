var express = require('express');
var app = express();
var cors = require('cors');
var http = require('http');
var mysql = require('mysql');

// Connection with MySql
var db = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "dev123",
  database: "HouseRental"
});

db.connect(function(err) {
  if (err) console.log(err);
  else 
  console.log("Connected!");
});
global.db = db;

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

var httpServer = http.createServer(app);

// Start the server
httpServer.listen(3000, function(){
  console.log('http running on: 3000');
});