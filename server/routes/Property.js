var express = require('express');
var router = express.Router();

router.get('/search', function(req, res, next) {
    if (!req.body) {
        res.status(500).send("Missing information to search.");
    }

    let sql = "SELECT * FROM PROPERTY WHERE email = '" + req.body.email + "'";

    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send("No properties found.");
        }
        res.status(200).send(result);
    });
});

router.post('/insert', function(req, res, next) {
    res.status(200).send("To be implementd");
});

router.put('/update', function(req, res, next) {
    res.status(200).send("To be implementd");
});

router.delete('/delete', function(req, res, next) {
    res.status(200).send("To be implementd");
});

module.exports = router;