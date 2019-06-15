var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var mysql = require('mysql');

// Connection with MySql
/*var conn = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Required application specific custom router module
// Route for login
var loginRoute = require('./routes/Login');
app.use('/login', loginRoute);

// Route for user sign up
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