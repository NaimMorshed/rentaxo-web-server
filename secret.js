require("dotenv").config();

const serverPort = process.env.PORT || 5000;
const mongodbURL = process.env.MONGODB_URL || "mongodb://localhost:27017/Rentaxo";

module.exports = { serverPort, mongodbURL };
