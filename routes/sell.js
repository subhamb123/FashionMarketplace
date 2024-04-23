var express = require('express');
const User = require('../models/User');
const Item = require('../models/Item')
var router = express.Router();

const sessionChecker = (req, res, next)=>{
  if(req.session.user){
    res.locals.username = req.session.user.username
    next()
  }else{
    res.redirect("/?msg=raf")
  }
}

router.use(sessionChecker)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sell', { loggedIn: req.session.user ? true : false, loggedInUser: req.session.user});
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
      seller: req.session.user.email,
      timestamp: Date.now()
    })
    res.redirect(`/item/${id}`);
});
  
  router.get('/logout', function(req,res, next){
    if(req.session.user){
      req.session.destroy()
      res.redirect("/?msg=logout")
    }else {
      res.redirect("/")
    }
    
  });
  
module.exports = router;