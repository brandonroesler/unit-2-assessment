var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET users listing. */
// router.get('/', todoCtrl.todos);
router.get('/', todosCtrl.index);
router.post('/', hasInfo, todosCtrl.create);

function hasInfo(req, res, next) {
    if (req.body.todo !== '') return next();
    res.redirect('back');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
