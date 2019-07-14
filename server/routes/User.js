var express = require('express');
var router = express.Router();



/* GET home page. */
router.route('/login').post(function(req, res) {
  if (!req.body.email) {
    return res.status(401).send("Email not informed.");
  }
  
  let sql = "SELECT * FROM PERSON WHERE email = '" + req.body.email + "'";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(401).send("User not found.");
    }
    res.status(200).send(result);
  });
});

router.post('/signup', function (req, res, next) {
  //First name, last name, email, password, phone number, person type, person id
  if (!req.body.email) {
    res.status(500).send("Email not informed.");
  }

  if (!req.body.firstName) {
    res.status(500).send("First Name not informed.");
  }

  if (!req.body.lastName) {
    res.status(500).send("Last Name not informed.");
  }

  /*if (!req.body.password) {
    res.status(500).send("Password not informed.");
  }*/

  if (!req.body.personType) {
    res.status(500).send("Person Type not informed.");
  }

  let sql = "INSERT INTO PERSON(firstName, lastName, email, phoneNumber, personType) VALUES('" + req.body.firstName + "', '" + req.body.lastName + "', '" + req.body.email + "', '" + req.body.phoneNumber + "', '" + req.body.personType + "')";

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send("Person was not able to be inserted.");
    }
    res.status(200).send("Person ID: " + result.insertId);
  });
});

module.exports = router;
