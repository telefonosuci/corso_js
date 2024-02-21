var express = require('express');
var router = express.Router();
var chapterRouter = require('./chapter');
var restTodoListRouter = require('./api/todo-list');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/chapter', chapterRouter);
module.exports = router;

router.use('/todos', restTodoListRouter);

module.exports = router;
