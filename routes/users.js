var express = require('express');
var router = express.Router();
var product = 1;
var factor = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor+=1;
  product *= factor;
  res.send(`product * factor: ${product}`);
});

module.exports = router;
