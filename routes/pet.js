const express = require("express");
const router = express.Router();
const { Pet, Comment } = require("../models/pet");
const petController = require("../controllers/pet");

//Do not need routes for new and edit pet because React render the forms on the front end

//Index: show all pets
router.get("/pet", petController.index);
router.post("/pet", petController.create);
router.get("/pet/:id", petController.show);
router.put("/pet/:id", petController.update);
router.delete("/pet/:id", petController.delete);

module.exports = router;
