var express = require('express');
const User = require('../models/User');
var router = express.Router();
const Item = require('../models/Item')
const Favorite = require('../models/Favorite')

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
router.get('/:id', async function(req, res, next) {
    const itemId = req.params.id;
    const currentPath = `/item/${itemId}`; // Construct the current path
    const item = await Item.findByPk(itemId);

    const seller = await User.findByPk(item.seller)

    if (item !== null && seller !== null){
        res.render('item', {currentPath, item, seller, loggedIn: req.session.user ? true : false, loggedInUser: req.session.user, getTimeAgo });
    }
    else
    {
        redirect("/search")
    }

});

router.get('/:id/favorite', async function(req, res, next) {
  const itemId = req.params.id;
  const userEmail = req.session.user.email;

  try {
    const existingFavorite = await Favorite.findOne({
      where: {
        user_email: userEmail,
        item_id: itemId
      }
    });

    if (!existingFavorite) {
      await Favorite.create({
        user_email: userEmail,
        item_id: itemId,
        timestamp: Date.now()
      });
    }

    res.redirect(`/item/${itemId}`);
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.redirect(`/item/${itemId}`);
  }
});

router.post('*/login', async function(req, res, next) {
  const user = await User.findUser(req.body.loginemail, req.body.loginpassword);
  if (user !== null) {
      req.session.user = user;
      const redirectUrl = "/item" + req.params[0] + "?loggedIn=true";
      res.redirect(redirectUrl);
  } else {
      res.redirect("/?msg=fail");
  }
});
  
  router.get('*/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      const redirectUrl = "/item" + req.params[0] + "?msg=logout";
      res.redirect(redirectUrl);
    }else {
      res.redirect("/item" + req.params[0])
    }
    
  });


  router.post('*/signup', async function(req, res, next) {
    try {
      console.log(req.body.signupfirstname + "-" + req.body.signuplastname + "-" + req.body.signupemail + "-" + req.body.signuppassword);
      const user = await User.create({
        firstname: req.body.signupfirstname,
        lastname: req.body.signuplastname,
        email: req.body.signupemail,
        password: req.body.signuppassword,
        user_type: 'user'
      });
  
      req.session.user = user;
      
      const redirectUrl = "/item" + req.params[0] + "?loggedIn=true";
  
      res.redirect(redirectUrl);
    } catch (error) {
      console.log(error)
      res.redirect("/item" + (req.params[0] || ""));
    }
  });

module.exports = router;
