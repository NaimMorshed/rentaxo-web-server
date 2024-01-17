const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserByEmail,
  getUserByPhone,
  postNewUser,
  deleteUser,
  getUserById,
  updateUser
} = require("../controllers/users.controller");

router.get("/", getAllUser);
router.get("/phone/:phone", getUserByPhone);
router.get("/email/:email", getUserByEmail);
router.get("/id/:id", getUserById);
router.post("/", postNewUser);
router.delete("/:phoneNumber", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
