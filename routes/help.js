var express = require('express');
const User = require('../models/User');
const Request = require('../models/Request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.msg){
      res.locals.msg = req.query.msg
    }
    res.render('help', { loggedIn: req.session.user ? true : false, loggedInUser: req.session.user });
});

router.post('/login', async function(req, res, next) {
    const user = await User.findUser(req.body.loginemail, req.body.loginpassword)
    if(user!== null){
      req.session.user = user
      res.redirect("/help/?loggedIn=true")
    }else{
      res.redirect("/help/?msg=fail")
    }
  });
  
  router.get('/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      res.redirect("/help/?msg=logout")
    }else {
      res.redirect("/help")
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
      res.redirect('/help/?signup=true');
    } catch (error) {
      console.log(error)
      res.redirect('/help/?msg=fail');
    }
  });

  router.post('/create', async function(req, res, next) {
    if(req.body.email.includes("@") && req.body.email.includes(".") && req.body.email.length >= 5 && req.body.request !== ""){
        await Request.create(
            {
              user_email: req.body.email,
              suggestions: req.body.request
            }
        )
        res.redirect('/help/?msg=success')
    }else{
      res.redirect("/help/?msg=fail")
    }
  });

module.exports = router;