var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send(["1 One","2 Two", "3 Three", "4 Four"]);
});

module.exports = router;