var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('capitolo'+ req.params.id, { title: 'Capitolo ' + req.params.id });
});

module.exports = router;
