const express = require('express');
const authController = require('../controllers/authController'); // Import everything

console.log("authController exports:", authController); 

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
