var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('womenswear', { loggedIn: req.session.user ? true : false });
});

router.post('/login', async function(req, res, next) {
    const user = await User.findUser(req.body.loginemail, req.body.loginpassword)
    if(user!== null){
      req.session.user = user
      res.redirect("/womenswear/?loggedIn=true")
    }else{
      res.redirect("/womenswear/?msg=fail")
    }
  });
  
  router.get('/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      res.redirect("/womenswear/?msg=logout")
    }else {
      res.redirect("/womenswear")
    }
    
  })

  router.post('/signup', async function(req, res, next) {
    try {
      console.log(req.body.signupfirstname+"-"+req.body.signuplastname+"-"+req.body.signupemail+"-"+req.body.signuppassword);
      const user = await User.create({
        firstname: req.body.signupfirstname,
        lastname: req.body.signuplastname,
        email: req.body.signupemail,
        password: req.body.signuppassword,
        user_type: 'user'
      });
  
      // Log in the user by setting the session
      req.session.user = user;
      
      // Redirect to the desired page after successful signup
      res.redirect('/womenswear/?signup=true');
    } catch (error) {
      console.log(error)
      res.redirect('/womenswear/?msg=fail');
    }
  });

module.exports = router;
