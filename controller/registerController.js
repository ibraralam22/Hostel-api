const { response } = require('express');
const userDetails = require('../models/userSchema');
const bcrypt = require('bcrypt');

class Register {
  signUp = async (req, res) => {
    try {
      const { name, email, age, gender, password } = req.body;
      if (!name) {
        throw {
          message: 'Please enter your name',
        };
      }
      if (!email) {
        throw {
          message: 'Please enter your email',
        };
      }
      if (!age) {
        throw {
          message: 'Please enter your age',
        };
      }
      if (!gender) {
        throw {
          message: 'Please enter your area gender',
        };
      }
      if (!password) {
        throw {
          message: 'Please create your password',
        };
      }

      const passwordHash = bcrypt.hashSync(password, 10);

      const response = await userDetails.create({
        name,
        email,
        age,
        gender,
        password: passwordHash,
      });
      res.send({
        status: true,
        response: {
          name: response.name,
          email: response.email,
          age: response.age,
          gender: response.gender,
          id: response._id,
        },
        message: 'Successfully Register!!',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
}

module.exports = new Register();
