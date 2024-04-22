var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { loggedIn: req.session.user ? true : false, loggedInUser: req.session.user });
});

router.post('/login', async function(req, res, next) {
  const user = await User.findUser(req.body.loginemail, req.body.loginpassword)
  if(user!== null){
    req.session.user = user
    res.redirect("/?loggedIn=true")
  }else{
    res.redirect("/?msg=fail")
  }
});

router.get('/logout', function(req,res, next){
  if(req.session.user){
    req.session.destroy()
    res.redirect("/?msg=logout")
  }else {
    res.redirect("/")
  }
  
})

router.post('/signup', async function(req, res, next) {
  try {
    const { signupfirstname, signuplastname, signupemail, signuppassword } = req.body;

    const username = signupemail.split('@')[0];

    const user = await User.create({
      firstname: signupfirstname,
      lastname: signuplastname,
      email: signupemail,
      password: signuppassword,
      username: username,
      user_type: 'user'
    });

    req.session.user = user;
    
    res.redirect('/?signup=true');
  } catch (error) {
    console.log(error)
    res.redirect('/?msg=fail');
  }
});

module.exports = router;
