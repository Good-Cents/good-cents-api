const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  title: String,
  description: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'},
  friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  totalcost: Number,
  savedamount: Number,
  contributions: [{type: Schema.Types.ObjectId, ref: 'Contribution'}],
});

module.exports = mongoose.model('Goal', schema);