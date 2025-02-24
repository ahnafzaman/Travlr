// const mongoose = require('mongoose');
// const Trip = mongoose.model('Trip'); // Reference the globally registered model

// module.exports.tripsList = async (req, res) => {
//   try {
//     console.log('Fetching trips from database...'); // Debug log
//     const trips = await Trip.find(); // Fetch all trips
//     console.log('Trips fetched successfully:', trips); // Debug log
//     res.status(200).json(trips);
//   } catch (error) {
//     console.error('Error fetching trips:', error.message); // Debug log
//     res.status(500).json({ message: error.message });
//   }
// };


const Trip = require('../models/tripModel');
const authMiddleware = require('../middleware/authMiddleware');

exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addTrip = [authMiddleware, async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}];




