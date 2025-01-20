const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

router.get('/', mealsController.mealsPage);

module.exports = router;
