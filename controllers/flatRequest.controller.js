const Request = require("../models/flatRequestModel");

exports.getRequest = async (req, res) => {
  try {
    const request = await Request.find({});
    return res.status(200).send(request);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.getRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findById({ _id: id });
    if (request) 
      return res.status(200).send(request);
    else 
      return res.status(404).send({ message: "Request not found!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.postRequest = async (req, res) => {
  const { apartmentId, landownerId, tenantId, status, date, category, member } = req.body;

  // Check if request exist
  const exist = await Request.findOne({ landownerId: landownerId, tenantId: tenantId });
  if (exist) {
    return res.status(400).send({
      message: "Request already exist!",
    });
  }

  // Create Request
  try {
    await Request.create({
      apartmentId, 
      landownerId, 
      tenantId, 
      status, 
      date, 
      category, 
      member
    });

    return res.status(201).send({ message: "Request created successfully!" });

  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.deleteRequest = async (req, res) => {
  try {
    const request = await Request.findOne({ _id: req.params.id });
    if (request) {
      await Request.deleteOne({ _id: req.params.id });
      return res.status(200).send({ message: "Request deleted successfully!" });
    } else {
      return res.status(404).send({ message: "Request not found!" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

