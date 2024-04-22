var express = require('express');
const User = require('../models/User');
var router = express.Router();
const Item = require('../models/Item')

function getTimeAgo(timestamp) {

  const date = new Date(timestamp);

  const currentTime = Date.now();

  const timeDifference = currentTime - date.getTime();

  if (timeDifference < 1000) { 
    return "just now";
  } else if (timeDifference < 60000) { 
    const seconds = Math.floor(timeDifference / 1000);
    return seconds + (seconds === 1 ? " second ago" : " seconds ago");
  } else if (timeDifference < 3600000) { 
    const minutes = Math.floor(timeDifference / 60000);
    return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  } else if (timeDifference < 86400000) { 
    const hours = Math.floor(timeDifference / 3600000);
    return hours + (hours === 1 ? " hour ago" : " hours ago");
  } else if (timeDifference < 2592000000) { 
    const days = Math.floor(timeDifference / 86400000);
    return days + (days === 1 ? " day ago" : " days ago");
  } else {
    const months = Math.floor(timeDifference / 2592000000);
    return months + (months === 1 ? " month ago" : " months ago");
  }
}

/* GET users listing. */
router.get('/:username', async function(req, res, next) {
    const username = req.params.username;
    console.log(username)
    const seller = await User.findOne({
      where: {
          username: username
      }
  });
  const email = seller.email  
  const items = await Item.findAll({
      where: {
          seller: email
      }
  });
    
  if (seller !== null && items !== null)
  {
    res.render('profile', {seller, items, loggedIn: req.session.user ? true : false, getTimeAgo, loggedInUser: req.session.user });
  }
  else{
    res.redirect('/')
  }
});

router.post('*/login', async function(req, res, next) {
  const user = await User.findUser(req.body.loginemail, req.body.loginpassword);
  if (user !== null) {
      req.session.user = user;
      const redirectUrl = "/profile" + req.params[0] + "?loggedIn=true";
      res.redirect(redirectUrl);
  } else {
      res.redirect("/profile" + req.params[0]);
  }
});
  
  router.get('*/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      const redirectUrl = "/profile" + req.params[0] + "?msg=logout";
      res.redirect(redirectUrl);
    }else {
      res.redirect("/profile" + req.params[0])
    }
    
  });


  router.post('*/signup', async function(req, res, next) {
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
      
      const redirectUrl = "/profile" + req.params[0] + "?msg=logout";

      // Redirect to the desired page after successful signup
      res.redirect(redirectUrl);
    } catch (error) {
      console.log(error)
      res.redirect("/profile" + req.params[0] + "?msg=fail");
    }
  });
module.exports = router;