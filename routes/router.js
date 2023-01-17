const router = require('express').Router();
const Register = require('../controller/registerController.js');
const Login = require('../controller/loginController');
const Room = require('../controller/roomController');
const Booked = require('../controller/bookedController');

// #Rooms
router.post('/booking', Room.createRoom);
router.get('/bookings', Room.getRooms);

// #BookedRooms
router.post('/confirmbookedrooms', Booked.createBooked);
router.get('/booked-rooms', Booked.getBooked);
router.put('/update-room', Room.updateRoom);

// #User_Register
router.post('/register', Register.signUp);

// #User_Login
router.get('/login', Login.signIn);
router.get('/users', Login.getUsers);
router.get('/user-room', Room.getUserRooms);
router.put('/update-user', Login.updateUser);

module.exports = router;
