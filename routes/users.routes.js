const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserByEmail,
  getUserByPhone,
  postNewUser,
  deleteUser,
  // updateUser
} = require("../controllers/users.controller");

router.get("/", getAllUser);
router.get("/phone/:phone", getUserByPhone);
router.get("/email/:email", getUserByEmail);
router.post("/", postNewUser);
router.delete("/", deleteUser);
// router.update("/", updateUser);

module.exports = router;
