var express = require('express');
var shoe_controller = require('../controllers/shoe');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET shoe */ 
router.get('/', shoe_controller.shoe_view_all_Page ); 

// GET request for one shoe. 
router.get('/shoes/:id', shoe_controller.shoe_detail);

/* GET detail shoe page */ 
router.get('/detail', shoe_controller.shoe_view_one_Page); 

/* GET create shoe page */ 
router.get('/create',secured, shoe_controller.shoe_create_Page); 

/* GET create update page */ 
router.get('/update',secured, shoe_controller.shoe_update_Page);

/* GET delete shoe page */ 
router.get('/delete',secured, shoe_controller.shoe_delete_Page); 

module.exports = router;