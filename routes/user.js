const express = require("express");
const router = express.Router();

const mongoose = require("../models/user");
const User = mongoose.model("User");
const userController = require("../controllers/user");

router.post("/login", userController.createLogin);
router.post("/sign-up", userController.createSignUp);

module.exports = router;
