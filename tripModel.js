const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String },
    imageUrl: { type: String }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
