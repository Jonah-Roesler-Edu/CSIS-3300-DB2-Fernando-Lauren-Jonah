var express = require('express');
var router = express.Router();


/**
 * PAGES IN PROPERTY
 *      
 */

 //Property listings page
router.get('/search', function(req, res, next) {
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
    

    db.query(sql, (err, result) => {
        if (err) {
        res.status(500).send("No properties found.");
        }
        res.status(200).send(result);
    });
});

//insert Property page
router.get('/create', function(req, res, next) {
    res.status(200).send("To be implementd");
})

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

module.exports = router;