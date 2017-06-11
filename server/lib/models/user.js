const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  goals: [{type: Schema.Types.ObjectId, ref: 'Goal'}]
});

module.exports = mongoose.model('User', schema);