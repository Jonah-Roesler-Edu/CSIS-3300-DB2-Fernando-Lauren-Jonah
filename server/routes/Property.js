var express = require('express');
var router = express.Router();


/**
 * PAGES IN PROPERTY
 *      
 */

 //Property listings page
router.get('/search', function(req, res, next) {
<<<<<<< HEAD
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
=======
    //Redirect to another page on button press
    // if(req.query.redir != undefined) {
    //     res.redirect('/'+req.query.redir);}

    res.status(200).send("To be implementd");
});

router.post('/search', function(req, res, next) {
    //Redirect to another page on button press
    // if(req.query.redir != undefined) {
    //     res.redirect('/'+req.query.redir);}

    if (!req.body.address) {
        res.status(500).send("Missing information to search.");
    }

    let sql = "SELECT * FROM PROPERTY WHERE address = '" + req.body.address + "'";
    
>>>>>>> routing

    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send("No properties found.");
        }
        res.status(200).send(result);
    });
});

<<<<<<< HEAD
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
=======
//insert Property page
router.get('/create', function(req, res, next) {
    res.status(200).send("To be implementd");
})
>>>>>>> routing

//On form submit...
router.post('/insert', function(req, res, next) {
    //If form unfilled
    // if (!req.body) {
    //     res.status(500).send("Missing information in fields");
    // }

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
})

//View specific property
router.get('/view', function(req, res, next) {
    //example URL
    //http://localhost:3000/property/view/?propertyID=zqq-121
    if(!req.query.propertyID) {
        res.status(500).send("Missing property ID");
    }
    console.log("PROPERTY ID IS..." + req.query.propertyID);

    //Uses URL property ID instead of POST data
    let sql = "SELECT * FROM PROPERTY WHERE propertyID = '" + req.query.propertyID + "'";

    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send("Property not found");
        }
        res.status(200).send(result);
    });
})

//Edit property
router.post('/update', function(req, res, next) {
    if(!req.body.propertyID) {
        res.status(500).send("Missing property ID");
    }

    let sql = "UPDATE PROPERTY " + 
                    "SET address = '" + req.body.address + "', " +
                    "postalCode = '" + req.body.postalCode + "', " +
                    "city = '" + req.body.city + "', " +
                    "province = '" + req.body.province + "', " +
                    "numberOfBed = " + req.body.numberOfBed + ", " +
                    "propertyType = '" + req.body.propertyType + "', " +
                    "description = '" + req.body.description + "', " +
                    "dateListed = '" + req.body.dateListed + "', " +
                    "numbOfBathrooms = " + req.body.numbOfBathrooms + ", " +
                    "yearBuilt = '" + req.body.yearBuilt + "', " +
                    "style = '" + req.body.style + "', " +
                    "price = " + req.body.price + ", " +
                    "propertyPurpose = '" + req.body.propertyPurpose + "' " +
                    "WHERE propertyID = '" + req.body.propertyID + "'";

                    console.log(req.body.propertyID);
    // db.sqlUpdate
    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send(err);
        }
    });
})


// Delete a property
router.delete('/delete', function(req, res, next) {
    let sql = "DELETE FROM PROPERTY WHERE propertyID = '" + req.body.propertyID + "'";
    db.query(sql, (err, result) => {
        if (err) {
<<<<<<< HEAD
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
=======
        res.status(500).send("property not found");
        }
        res.status(200).send("Property deleted");
    });
});


// //Create new property
// router.post('/insert', function(req, res, next) {
//     res.status(200).send("To be implementd");
// });

//Update property
// router.put('/update', function(req, res, next) {
//     res.status(200).send("To be implementd");
// });

//Delete a property
// router.delete('/delete', function(req, res, next) {
//     res.status(200).send("To be implementd");
// });
>>>>>>> routing

module.exports = router;