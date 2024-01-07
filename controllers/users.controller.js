const userCollection = require("../mongodb");
const Users = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

exports.getAllUser = async (req, res) => {
  try {
    const query = {};
    const users = await Users.find(query);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.getUserByPhone = async (req, res) => {
  const { phone } = req.params;
  const query = { phone: phone };
  const cursor = userCollection.find(query);
  const users = await cursor.toArray();
  res.send(users);
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const query = { email: email };
    const users = await Users.find(query);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.postNewUser = async (req, res) => {
  try {
    const newUser = new Users({
      fullName: req.body.fullName,
      nickname: req.body.nickname,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      district: req.body.district,
      religion: req.body.religion,
      phoneNumber: req.body.phoneNumber,
      profilePhoto: req.body.profilePhoto,
      accountType: req.body.accountType,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.params.email });
    if (user) {
      await Users.deleteOne({ email: req.params.email });
      res.status(200).send({
        message: "User deleted successfully!",
      });
    } else {
      res.status(404).send({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
};
