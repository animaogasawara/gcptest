var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEST' });
});

module.exports = router;

// mongoDBにUPDATE
/*
var mongo = require('mongodb');
var db = new mongo.Db('test', new mongo.Server('10.140.0.2', 27017, {}), {});

db.open(function() {
    db.collection('mycollection', function(err, collection) {
        doc = {
            "name" : "Ichiro",
            "age" : 42,
            "work" : ["professor", "writer", "TV Caster"]
        };

        collection.insert(doc, function() {
            console.log("insert success");
            db.close();
        });
    });
});
*/