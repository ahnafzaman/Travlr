const mongoose = require('mongoose');
const connectDB = require('./db');
const Trip = require('./tripModel');
const tripsData = require('./trips.json');

const testDatabase = async () => {
    await connectDB();
    
    try {
        await Trip.deleteMany(); // Clear existing data
        await Trip.insertMany(tripsData); // Insert sample data
        
        const trips = await Trip.find(); // Retrieve inserted data
        console.log('Database successfully populated with trips:', trips);
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        mongoose.connection.close();
    }
};

testDatabase();
