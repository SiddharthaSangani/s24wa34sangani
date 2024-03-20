var express = require('express');
var router = express.Router();
var x = Math.random()*(10-(-1))+(-1);
/* GET compute page. */
router.get('/', function(req, res, next) {
  var y = Math.tanh(x);
  var z = Math.trunc(x); 
  var a = Math.sign(x);  
  var b = Math.pow(x,x);
  res.render("computation",{
    y: `tanh [${x}] is ${y}`,
    z: `trunc [${x}] is ${z}`,
    a: `sign [${x}] is ${a}`,
    b: ` ${x} to ${x} is ${b}`
})
});

module.exports = router;
