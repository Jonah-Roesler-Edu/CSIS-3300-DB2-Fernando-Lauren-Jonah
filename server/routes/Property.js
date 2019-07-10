var express = require('express');
var router = express.Router();

router.get('/search', function(req, res, next) {
    if (!req.body.propertyPurpose) {
        res.status(500).send("Missing information to search.");
    }

    let sql = "SELECT * FROM PROPERTY WHERE propertyPurpose = '" + req.body.propertyPurpose + "'";

    if (req.body.numberOfBed) {
        sql += " AND numberOfBed = " + req.body.numberOfBed;
    }

    if (req.body.propertyType) {
        sql += " AND propertyType = '"  + req.body.propertyType + "'";
    }

    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send("No properties found.");
        }
        res.status(200).send(result);
    });
});

router.post('/insert', function(req, res, next) {
    if (!req.body.address) {
        res.status(500).send("Missing address info");
    }

    if (!req.body.postalCode) {
        res.status(500).send("Missing postal code");
    }

    if (!req.body.city) {
        res.status(500).send("Missing city");
    }

    if (!req.body.province) {
        res.status(500).send("Missing province");
    }

    if (!req.body.numberOfBed) {
        res.status(500).send("Missing number of beds");
    }

    if (!req.body.propertyType) {
        res.status(500).send("Missing property type");
    }

    if (!req.body.description) {
        res.status(500).send("Missing description");
    }

    if (!req.body.squareFeet) {
        res.status(500).send("Missing square feet");
    }

    if (!req.body.numbOfBathrooms) {
        res.status(500).send("Missing number of bathrooms");
    }

    if (!req.body.yearBuilt) {
        res.status(500).send("Missing year built");
    }

    if (!req.body.style) {
        res.status(500).send("Missing style");
    }

    if (!req.body.price) {
        res.status(500).send("Missing price");
    }

    if (!req.body.propertyPurpose) {
        res.status(500).send("Missing property purpose");
    }

    let sqlInsert = "INSERT INTO PROPERTY(propertyID, personID, address, postalCode, city, province, numberOfBed, propertyType,	description, " +
	                "dateListed, squareFeet, numbOfBathrooms, yearBuilt, style, price, propertyPurpose, agentID) " + 
                    "VALUES ('" + generatePropertyKey() + "'," +
                    "" + req.body.personID + "," +
                    "'" + req.body.address + "'," +
                    "'" + req.body.postalCode + "'," +
                    "'" + req.body.city + "'," +
                    "'" + req.body.province + "'," +
                    "" + req.body.numberOfBed + "," +
                    "'" + req.body.propertyType + "'," +
                    "'" + req.body.description + "'," +
                    "'" + getDateListed() + "'," +
                    "" + req.body.squareFeet + "," +
                    "" + req.body.numbOfBathrooms + "," +
                    "" + req.body.yearBuilt + "," +
                    "'" + req.body.style + "'," +
                    "'" + req.body.price + "'," +
                    "'" + req.body.propertyPurpose + "'," +
                    "" + req.body.agentID + ");";

    db.query(sqlInsert, (err, result) => {
        if (err) {
            res.status(500).send("Problem creating Property");
        }
        res.status(200).send("Property ID: " + result.insertId);
    });
});

router.put('/update', function(req, res, next) {
    res.status(200).send("To be implementd");
});

router.delete('/delete', function(req, res, next) {
    let sql = "DELETE FROM PROPERTY WHERE propertyID = '" + req.body.propertyID + "'";
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send("Property not found");
        }
        res.status(200).send("Property deleted successfully");
    });
});

function generatePropertyKey() {
    var result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    var aux = '';

    for ( var i = 0; i < 3; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        aux += numbers.charAt(Math.floor(Math.random() * numbers.length));
     }
     return result + '-' + aux;
}

function getDateListed() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

module.exports = router;