// const express = require('express');
// const router = express.Router();
// const tripsController = require('../controllers/trips'); // Import trips controller

// // Define route for fetching trips
// router.get('/trips', tripsController.tripsList);

// module.exports = router;



const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes'); 
const tripRoutes = require('./trips'); 



router.use('/trips', tripRoutes);
router.use('/auth', authRoutes); 

module.exports = router;

