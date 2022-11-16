var express = require('express');
var shoe_controller = require('../controllers/shoe');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('shoe', { title: 'Search Results for shoe Class' });
// });

/* GET shoe */ 
router.get('/', shoe_controller.shoe_view_all_Page ); 

// GET request for one shoe. 
router.get('/shoes/:id', shoe_controller.shoe_detail);

/* GET detail shoe page */ 
router.get('/detail', shoe_controller.shoe_view_one_Page); 

/* GET create shoe page */ 
router.get('/create', shoe_controller.shoe_create_Page); 

/* GET create update page */ 
router.get('/update', shoe_controller.shoe_update_Page);

/* GET delete shoe page */ 
router.get('/delete', shoe_controller.shoe_delete_Page); 

module.exports = router;