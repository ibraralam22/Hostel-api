const mongoose = require('mongoose');

const booked = new mongoose.Schema({
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'room' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    status: {
        type: String,
        enum : ['BOOKED','NOT BOOKED'],
        default: 'NOT BOOKED'
    }
});

const bookedDetails = mongoose.model('booking', booked);

module.exports = bookedDetails;
