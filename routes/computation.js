var express = require('express');
var router = express.Router();
var x = Math.random()*(10-(-1))+(-1);
/* GET mydata page. */
router.get('/', function(req, res, next) {
   var y = Math.tanh(x);
  res.send(`tanh[${x}] is [${y}]`);
});

module.exports = router;
