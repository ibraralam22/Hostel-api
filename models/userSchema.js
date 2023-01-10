const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: 'Password is required',
  },
});

const userDetails = mongoose.model('user', user);

module.exports = userDetails;
