var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next) {

    if(req.query.redir != undefined) {
        res.redirect('/'+req.query.redir);}

    res.sendFile(path.join(__dirname, '..','/views','/test.html'));
});
module.exports = router;