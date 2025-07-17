const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectMongoDb = async () => {
  console.log("Trying to connect to MongoDB Database");
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "MongoDB Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.error("Error connecting to MongoDB Database: ", err.message);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
