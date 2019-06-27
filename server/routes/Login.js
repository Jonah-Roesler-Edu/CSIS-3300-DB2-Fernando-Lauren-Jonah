var express = require('express');
var router = express.Router();

var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  //Page to render
  res.render('login')

  let sql = "SELECT * FROM PERSON WHERE email = '" + req.body.email + "'";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(401).send("User not found.");
    }
    res.status(200).send(result);
  });


});

module.exports = router;
