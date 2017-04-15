var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
    var arr = [
        "Hi",
        "Hello",
        "Bonjour"
    ];
    arr.push();
    res.render(arr)

});

module.exports = router;
