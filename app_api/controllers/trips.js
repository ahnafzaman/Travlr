const mongoose = require('mongoose');
const Trip = mongoose.model('Trip'); // Reference the globally registered model

module.exports.tripsList = async (req, res) => {
  try {
    console.log('Fetching trips from database...'); // Debug log
    const trips = await Trip.find(); // Fetch all trips
    console.log('Trips fetched successfully:', trips); // Debug log
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error.message); // Debug log
    res.status(500).json({ message: error.message });
  }
};



