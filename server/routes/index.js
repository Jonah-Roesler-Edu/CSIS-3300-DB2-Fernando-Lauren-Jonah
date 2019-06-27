var express = require('express');
var router = express.Router();

var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  //Page to render
  res.render('index')

});

module.exports = router;
