require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 5000;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["content-Type", "Authorization"],
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started successfully...");
    });
  })
  .catch((err) => {
    console.log("Unble to run the server...");
  });
