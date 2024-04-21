var express = require('express');
const User = require('../models/User');
const Item = require('../models/Item')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sell', { loggedIn: req.session.user ? true : false });
});

/* GET users listing. */
router.post('/new-listing', async function(req, res, next) {
    const id = await Item.getNewItemId()
    console.log(id)
    const item = await Item.create({
      itemid: id,
      category: req.body.category,
      subcategory: req.body.subcategory,
      price: req.body.price,
      designer: req.body.designer,
      title: req.body.title,
      size: req.body.size,
      style: req.body.style,
      timestamp: Date.now()
    })
    res.redirect(`/item/${id}`);
});

router.post('/login', async function(req, res, next) {
    const user = await User.findUser(req.body.loginemail, req.body.loginpassword)
    if(user!== null){
      req.session.user = user
      res.redirect("/search/?loggedIn=true")
    }else{
      res.redirect("/search/?msg=fail")
    }
  });
  
  router.get('/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      res.redirect("/search/?msg=logout")
    }else {
      res.redirect("/search")
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
      res.redirect('/search/?signup=true');
    } catch (error) {
      console.log(error)
      res.redirect('/search/?msg=fail');
    }
  });
module.exports = router;