const mongoose = require("mongoose");

function DBConnection() {
  mongoose
    .connect("mongodb+srv://alam2201:Alam%402201@runo.oikwuaj.mongodb.net/hostel")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error)
      console.log("Failed to connect to MongoDB");
    });
}

module.exports = DBConnection;
