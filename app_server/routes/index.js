// var express = require('express');
// var router = express.Router();

// /* GET home page. */
//  router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


// var express = require('express');
// var router = express.Router();
// var path = require('path');


// // Serve home page
// router.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

console.log('indexController:', indexController);
router.get('/', indexController.homePage);

module.exports = router;


