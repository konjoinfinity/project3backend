const express = require("express");
const router = express.Router();

// router.use("/", require("./application"));
router.use("/", require("./pet"));
// router.use("/api", require("./api"));
// router.use("/api", (req, res) => {
// 	res.send("api");
// });
// router.use("/user", require("./user"));

// router.all('*', (req, res) => {
//     res.status(400).send();
// });

module.exports = router;
