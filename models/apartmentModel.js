const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  landownerId: {
    type: String,
    required: true,
  },
  tenantId: {
    type: String,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  unitNumber: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  bedRooms: {
    type: Number,
    required: true,
  },
  bathRooms: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  parking: {
    type: Number,
    required: true,
  },
  wifi: {
    type: Boolean,
    required: true,
  },
  kitchen: {
    type: Number,
    required: true,
  },
  lift: {
    type: Boolean,
    required: true,
  },
  furnishing: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  balcony: {
    type: Number,
    required: true,
  },
  facing: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  securityGuard: {
    type: Boolean,
    required: true,
  },
  gasType: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  postOffice: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: String,
    required: true,
  },
});

const Apartments = mongoose.model("apartments", apartmentSchema);

module.exports = Apartments;