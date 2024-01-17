const Apartments = require("../models/apartmentModel");

exports.getApartments = async (req, res) => {
  try {
    const apartments = await Apartments.find({});
    res.status(200).send(apartments);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.getApartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const apartment = await Apartments.findById({ _id: id });
    if (apartment) res.status(200).send(apartment);
    else res.status(404).send({ message: "Apartment not found!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
  
}

exports.postApartment = async (req, res) => {
  const { fullName, nickname, email, dob, gender, district, religion, phoneNumber, profilePhoto, accountType } = req.body;
  const exist = await Users.findOne({ email });

  if (exist) {
    return res.status(400).send({
      message: "Apartment already exist!",
    });
  }
  else if (userExistPhone) {
    return res.status(400).send({
      message: "User phone already exist!",
    });
  }

  try {
    await Users.create({
      fullName: req.body.fullName,
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
      message: "Apartment created successfully!",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.deleteApartment = async (req, res) => {
  try {
    const apartment = await Apartments.findOne({ _id: req.params.id });
    if (apartment) {
      await Apartments.deleteOne({ _id: req.params.id });
      res.status(200).send({
        message: "Apartment deleted successfully!",
      });
    } else {
      res.status(404).send({ message: "Apartment not found!" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.updateApartment = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Apartments.findById({ _id: id });
    if (user) {
      await Apartments.updateOne(
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
        message: "Apartment is updated!",
      });
    } else {
      res.status(404).send({ message: "Apartment not found!" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
