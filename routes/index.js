var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET chapters page. */
router.get('/capitolo01', function(req, res, next) {
  res.render('capitolo01', { title: 'Capitolo 01' });
});

router.get('/capitolo02', function(req, res, next) {
  res.render('capitolo02', { title: 'Capitolo 02' });
});

router.get('/capitolo03', function(req, res, next) {
  res.render('capitolo03', { title: 'Capitolo 03' });
});

module.exports = router;
