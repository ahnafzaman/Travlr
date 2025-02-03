const mongoose = require('mongoose');
const connectDB = require('./db');
const Trip = require('./tripModel');
const tripsData = require('./trips.json');

const testDatabase = async () => {
    await connectDB();
    
    try {
        await Trip.deleteMany(); 
        await Trip.insertMany(tripsData); 
        
        const trips = await Trip.find();
        console.log('Database successfully populated with trips:', trips);
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        mongoose.connection.close();
    }
};

testDatabase();
