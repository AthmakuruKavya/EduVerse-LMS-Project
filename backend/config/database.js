require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to database...");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {connectDB}