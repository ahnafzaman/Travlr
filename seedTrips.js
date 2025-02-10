const mongoose = require('mongoose');
require('./app_api/models/tripModel'); // Load the Trip schema

const Trip = mongoose.model('Trip'); // Reference the globally registered model

const seedTrips = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect('mongodb://localhost:27017/travlr', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define sample data
    const trips = [
      {
        name: 'Trip to Paris',
        destination: 'Paris',
        price: 1200,
        startDate: new Date('2025-06-01'),
        endDate: new Date('2025-06-10'),
        description: 'Experience the beauty of Paris!',
        imageUrl: 'https://example.com/paris.jpg',
      },
      {
        name: 'Adventure in Bali',
        destination: 'Bali',
        price: 900,
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-07-14'),
        description: 'Enjoy a thrilling adventure in Bali!',
        imageUrl: 'https://example.com/bali.jpg',
      },
    ];

    // Clear the trips collection and insert new data
    await Trip.deleteMany({});
    const result = await Trip.insertMany(trips);
    console.log('Database seeded successfully:', result);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error.message);
    mongoose.connection.close();
  }
};

seedTrips();
