var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log(req.body.email+"-"+req.body.password);
  res.redirect("/home")
});

module.exports = router;
