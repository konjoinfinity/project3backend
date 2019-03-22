const express = require("express");
const router = express.Router();

router.use("/", require("./pet"));

module.exports = router;
