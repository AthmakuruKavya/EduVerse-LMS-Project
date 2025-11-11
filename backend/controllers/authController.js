const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { userName, userEmail, password, role } = req.body;

    //checking whether the user exist or not
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    //hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    //storing user data
    const newUser = new User({
      userName,
      userEmail,
      password: hashPassword,
      role,
    });
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    //checking whether user is exist or not
    const checkUser = await User.findOne({ userEmail });
    if (!checkUser) {
      return res.status(404).json({
        success: false,
        message: "Register to login",
      });
    }

    //checking the credentials
    const isPasswordValid = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    } else {
      //generating acces token if user is valid
      const accessToken = await jwt.sign(
        {
          _id: checkUser._id,
          userName: checkUser.userName,
          userEmail: checkUser.userEmail,
          role: checkUser.role,
        },
        "lms-project",
        { expiresIn: "120m" }
      );

      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: {
          accessToken,
          user: {
            _id: checkUser._id,
            userName: checkUser.userName,
            userEmail: checkUser.userEmail,
            role: checkUser.role,
          }
        },
      });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login};
