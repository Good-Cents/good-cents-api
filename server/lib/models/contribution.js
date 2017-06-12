const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Donator: String,
  amount: Number,
  date: Date,
});

module.exports = mongoose.model('Contribution', schema);