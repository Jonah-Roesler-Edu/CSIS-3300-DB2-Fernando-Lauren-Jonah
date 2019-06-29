var express = require('express');
var router = express.Router();

var path = require('path');

var viewsfolder = 'server/routes';


/* GET home page. */
router.get('/', function(req, res, next) {
  //Page to render
  // res.render('index')
  res.sendFile(path.join(__dirname, '..','/views','/index.html'));

});

module.exports = router;
