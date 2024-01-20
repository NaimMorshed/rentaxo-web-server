const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema({
  apartmentSaved: {
    type: Number,
    default: 0,
  },
  tenantSaved: {
    type: Number,
    default: 0,
  },
  autoPlaceOnEmpty: {
    type: Boolean,
    default: false,
  },
  tenantType: {
    type: String,
    default: "please update!",
  },
});

const Tenant = mongoose.model("tenant", tenantSchema);

module.exports = Tenant;