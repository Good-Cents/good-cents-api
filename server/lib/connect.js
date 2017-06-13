/*eslint-disable*/
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/goodcents';
mongoose.connect(DB_URI);


mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + DB_URI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error:' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

//Disconnect when finished
process.on('SIGNIT', function () {
  mongoose.connection.close('disconnected', function () {
    console.log('Mongoose default connection disconnected through app terminal');
    process.exit(0);
  });
});