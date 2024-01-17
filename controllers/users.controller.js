const Users = require("../models/userModel");

exports.getAllUser = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.getUserByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const user = await Users.findOne({ phone: phone });
    if (user) res.status(200).send(user);
    else res.status(404).send({ message: "User not found!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById({ _id: id });
    if (user) res.status(200).send(user);
    else res.status(404).send({ message: "User not found!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
  
}

exports.getUserByEmail = async (req, res) => {
  // try {
  //   const { email } = req.params;
  //   const query = { email: email };
  //   const users = await Users.find(query);
  //   res.status(200).send(users);
  // } catch (error) {
  //   res.status(500).send({
  //     message: error.message,
  //   });
  // }
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
  const { fullName, nickname, email, dob, gender, district, religion, phoneNumber, profilePhoto, accountType } = req.body;
  const userExistEmail = await Users.findOne({ email });
  const userExistPhone = await Users.findOne({ phoneNumber });

  if (userExistEmail) {
    return res.status(400).send({
      message: "User email already exist!",
    });
  }
  else if (userExistPhone) {
    return res.status(400).send({
      message: "User phone already exist!",
    });
  }

  try {
    await Users.create({
      fullName,
      nickname,
      email,
      dob,
      gender,
      district,
      religion,
      phoneNumber,
      profilePhoto,
      accountType,
    });
    res.status(201).send({
      message: "User created successfully!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await Users.findOne({ phoneNumber: req.params.phoneNumber });
    if (user) {
      await Users.deleteOne({ phoneNumber: req.params.phoneNumber });
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
  try {
    const { id } = req.params;
    const user = await Users.findById({ _id: id });
    if (user) {
      await Users.updateOne(
        { _id: req.body._id },
        {
          $set: {
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
            registrationDate: req.body.registrationDate,
          },
        }
      );
      res.status(200).send({
        message: "User is updated!",
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
