var express = require('express');
var router = express.Router();
var chapterRouter = require('./chapter');
var restTodoListRouter = require('./api/todo-list');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/extras', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('extras', { title: 'Extras' });
});

router.use('/chapter', chapterRouter);
router.use('/todos', restTodoListRouter);

module.exports = router;
