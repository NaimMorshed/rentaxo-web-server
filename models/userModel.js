const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    match: /^[0-9]{11}$/, // 11-digit phone number format
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;