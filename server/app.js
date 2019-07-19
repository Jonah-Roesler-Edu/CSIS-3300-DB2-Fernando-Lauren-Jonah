var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');

// Connection with MySql
var db = mysql.createConnection({
  host: "localhost", //'eunocontrole.com',
  port: 3306,
  user: "dev", //"root", // "eunoc863_dev", //
  password: "dev123", //"TT7HKK3hF2WmQL", //,
  database: "HouseRental" // "eunoc863_HouseRental" //
});

db.connect(function(err) {
  if (err) {  
    console.log(err);
    console.log("failed connection to mysql") 
  } else {
    console.log("Connected!");
  }
});
global.db = db;

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Route for login
// Route for user sign up
var userRoute = require('./routes/User');
app.use('/user', userRoute);

// Route for list of houses by search filter
// Route for insert house
// Route for consult a house
// Route for delete house
// Route for update house
var propertyRoute = require('./routes/Property');
app.use('/property', propertyRoute);

var httpServer = http.createServer(app);

// Start the server
httpServer.listen(3000, function(){
  console.log('http running on: 3000');
});