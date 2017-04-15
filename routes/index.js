var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sheeban' });
    var arr = [
        "Hi",
        "Hello",
        "Bonjour"
    ];
    arr.push();
});



module.exports = router;
