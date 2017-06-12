const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  hash: String,
  plaidAccessToken: String,
  bankAccountEntered: Boolean,
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
  accounts: [{
    name: String,
    primary: Boolean
  }]
});

//Methods below are for app encryption
schema.method('generateHash', function (password) {
  this.hash = bcrypt.hashSync(password, 8);
});

schema.method('comparePassword', function (password) {
  return bcrypt.compareSync(password, this.hash);
});

module.exports = mongoose.model('User', schema);