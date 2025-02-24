// const express = require('express');
// const router = express.Router();
// const tripsController = require('../controllers/trips'); // Import trips controller

// // Define route for fetching trips
// router.get('/trips', tripsController.tripsList);

// module.exports = router;



const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes'); // Add this
const tripRoutes = require('./trips'); // Make sure trips.js is inside routes/



router.use('/trips', tripRoutes);
router.use('/auth', authRoutes); // Add this

module.exports = router;

