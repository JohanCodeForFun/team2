const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
  adress: String,
  city: String,
  postalCode: Number,
  rooms: Number,
  floor: Number,
  price: Number,
  yearBuilt: Number,
  size: Number,
  sold: Boolean,
  description: String,
  images: [String],
});

module.exports = mongoose.model('House', houseSchema);