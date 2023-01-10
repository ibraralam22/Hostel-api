const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: String,
    required: true,
  },
  hostelNo: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const roomDetails = mongoose.model('room', roomSchema);

module.exports = roomDetails;
