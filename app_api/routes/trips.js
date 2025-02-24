const express = require('express');
const { getTrips, addTrip } = require('../controllers/trips');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getTrips);
router.post('/', authMiddleware, addTrip);

module.exports = router; // Ensure this is correctly exported
