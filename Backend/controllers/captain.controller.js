const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

exports.registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // Check if captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
      return res.status(400).json({ message: 'Captain already exists' });
    }

    // Hash Password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create new Captain
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
    });

    // Generate Token
    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain });
  } catch (error) {
    console.error("Error in registerCaptain:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find captain by email
    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate Auth Token
    const token = captain.generateAuthToken();

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    res.status(200).json({ token, captain });
  } catch (error) {
    console.error("Error in loginCaptain:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getCaptainProfile = async (req, res, next) => {
  try {
    res.status(200).json({ captain: req.captain });
  } catch (error) {
    console.error("Error in getCaptainProfile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logoutCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (token) {
      await blackListTokenModel.create({ token });
    }

    res.clearCookie('token', { path: '/' });

    res.status(200).json({ message: 'Logout Successfully' });
  } catch (error) {
    console.error("Error in logoutCaptain:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
