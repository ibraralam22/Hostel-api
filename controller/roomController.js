const roomDetails = require('../models/roomBookingSchema');
const bookedDetails = require('../models/bookedRoom');
const mongoose = require('mongoose');

class Room {
  createRoom = async (req, res) => {
    try {
      const { roomNo, hostelNo, userId } = req.body;
      if (!roomNo) {
        throw {
          message: 'Please enter room',
        };
      }
      if (!hostelNo) {
        throw {
          message: 'Please enter hostel',
        };
      }
      if (!userId) {
        throw {
          message: 'Please enter hostel',
        };
      }

      const response = await roomDetails.create({
        roomNo,
        hostelNo,
        userId
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully booked your room. Please wait for confirmation',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getRooms = async (req, res) => {
    try {
      const { userId, date } = req.query;
      let query = {};
      if (userId && date) {
        if (userBookedRooms.length) {
          res.send({
            status: true,
            message: 'You have already booked this room',
          });
          return;
        }
      }

      let bookedRooms = await bookedDetails.find({}).select('roomId');

      bookedRooms = bookedRooms.map((slots) => slots.slotId);

      if (bookedRooms) {
        query = Object.assign(query, {
          _id: { $nin: bookedSlots },
        });
      }

      const response = await roomDetails.find(query);
      res.send({
        status: true,
        response: response,
        message: 'Successfully get all Rooms',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getUserRooms = async (req, res) => {
    const userId = req.query.userId;
    const response = await roomDetails
      .find({ userId: userId })
      .populate('userId');
    res.send(response);
  };

  updateRoom = async (req, res) => {
    const id = req.body.id;
    const roomNo = req.body.roomNo;
    const response = await roomDetails.updateMany(
      { _id: id },
      { roomNo: roomNo }
    );
    res.send(response);
  };
}

module.exports = new Room();
