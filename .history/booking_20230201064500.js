const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },    
  studio: {
    type: String,
    required: true
  },
  date: {
    type: date,
    required: true
  },
  number: {
    type: string,
    required: true
  },
  payment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
