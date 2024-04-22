var express = require('express');
const User = require('../models/User');
var router = express.Router();
const Item = require('../models/Item');
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

const sessionChecker = (req, res, next)=>{
    if(req.session.user){
      res.locals.username = req.session.user.username
      next()
    }else{
      res.redirect("/?msg=raf")
    }
  }
  
  router.use(sessionChecker)

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const user = req.session.user;
    const email = user.email
    console.log(user)
    const favorites = await Favorite.findAll({
      where: {
          user_email: email
      },
      order: [['timestamp', 'DESC']] // Sort favorites by timestamp in descending order
  });
    const itemIds = favorites.map(favorite => favorite.item_id);
    console.log(itemIds)
    const items = await Item.findAll({
        where: {
            itemid: itemIds
        }
    })
        
    if (items !== null)
    {
        res.render('favorites', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
    }
    else{
        res.redirect('/')
    }
});

  router.get('*/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      const redirectUrl = "/profile" + req.params[0] + "?msg=logout";
      res.redirect(redirectUrl);
    }else {
      res.redirect("/")
    }
    
  });


module.exports = router;