const bookedDetails = require('../models/bookedRoom');

class Booked {
  createBooked = async (req, res) => {
    try {
      const { roomId, userId } = req.body;
      if (!roomId) {
        throw {
          message: 'Please enter your roomId',
        };
      }
      if (!userId) {
        throw {
          message: 'Please enter your userId',
        };
      }
      const bookedList = await bookedDetails.find({
        userId: userId,
        status: 'COMPLETED',
      });
      if (bookedList.length >= 1) {
        throw {
          message: 'You are fully vaccinated',
        };
      }

      const response = await bookedDetails.create({
        slotId,
        userId,
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully booked',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getBooked = async (req, res) => {
    try {
      const response = await bookedDetails.find().populate('userId roomId');
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

  updateBooked = async (req, res) => {
    const id = req.body.id;
    const slotTime = req.body.slotTime;
    const response = await bookedDetails.updateOne(
      { _id: id },
      { slotTime: slotTime }
    );
    res.send(response);
  };
}

module.exports = new Booked();
