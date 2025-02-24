require('dotenv').config();
console.log("JWT_SECRET in authController:", process.env.JWT_SECRET);


const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const authController = {};

authController.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Registering user:", username); 

    let user = await User.findOne({ username });
    if (user) {
      console.log("User already exists:", username); 
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, password: hashedPassword });

    await user.save();
    console.log("User registered successfully:", username); 
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Register Error:", error); 
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


authController.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt for user:", username); 

    const user = await User.findOne({ username });
    if (!user) {
      console.log("User not found:", username); 
      return res.status(400).json({ message: "User not found" });
    }

    console.log("User found, checking password..."); 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials for:", username); 
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("Password match, generating token..."); 
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });

  } catch (error) {
    console.error("Login Error:", error); 
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = authController;
