var express = require('express');
const User = require('../models/User');
const Item = require('../models/Item');
const Staffpick = require('../models/Staffpick')
var router = express.Router();

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
router.get('/', async function(req, res, next) {
    const items = await Item.findAll();

    if(req.query.msg){
        res.locals.msg = req.query.msg
    }

    res.locals.product = req.query.product
    res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear', async function(req, res, next) {
  const items = await Item.findItemsByCategory("Menswear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear/tops', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Tops");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear/bottoms', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Bottoms");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear/outerwear', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Outerwear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear/footwear', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Footwear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/menswear/accessories', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Accessories");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear', async function(req, res, next) {
  const items = await Item.findItemsByCategory("Womenswear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/tops', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Tops");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/bottoms', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Bottoms");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/outerwear', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Outerwear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/footwear', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Footwear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }
  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/accessories', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Accessories");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/womenswear/bags&luggage', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Womenswear", "Bags & Luggage");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/sneakers', async function(req, res, next) {
  const items = await Item.findItemsByCategorySubcategory("Menswear", "Footwear");

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/designer/:designer', async function(req, res, next) {
  let designer = req.params.designer;
  designer = designer.replace(/_/g, ' ');
  const items = await Item.findItemsByDesigner(designer);

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

/* GET users listing. */
router.get('/staffpicks', async function(req, res, next) {
  const staffpicks = await Staffpick.findAll();
  const itemids = staffpicks.map(staffpick => staffpick.itemid);
  console.log(itemids)
  const items = await Item.findAll({
      where: {
          itemid: itemids
      }
  });

  if(req.query.msg){
      res.locals.msg = req.query.msg
  }

  res.locals.product = req.query.product
  res.render('search', { loggedIn: req.session.user ? true : false, items, getTimeAgo, loggedInUser: req.session.user });
});

router.post('*/login', async function(req, res, next) {
  const user = await User.findUser(req.body.loginemail, req.body.loginpassword);
  if (user !== null) {
      req.session.user = user;
      const redirectUrl = "/search" + req.params[0] + "?loggedIn=true";
      res.redirect(redirectUrl);
  } else {
      res.redirect("/search" + req.params[0] + "/?msg=fail");
  }
});
  
  router.get('*/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      const redirectUrl = "/search" + req.params[0] + "?msg=logout";
      res.redirect(redirectUrl);
    }else {
      res.redirect("/search" + req.params[0])
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
      
      const redirectUrl = "/search" + req.params[0] + "?loggedIn=true";
      console.log(redirectUrl)
      res.redirect('/search');
    } catch (error) {
      console.log(error)
      res.redirect('/search/?msg=fail');
    }
  });
module.exports = router;