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

// Route for list of houses by search filter
// Route for insert house
// Route for consult a house
// Route for delete house
// Route for update house

var httpServer = http.createServer(app);

// Start the server
httpServer.listen(3000, function(){
  console.log('http running on: 3000');
});