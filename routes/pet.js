const express = require("express");
const router = express.Router();
const { Pet, Comment } = require("../models/pet");
const petController = require("../controllers/pet");

//Do not need routes for new and edit pet because React render the forms on the front end

//Index: show all pets
// router.get("/", petController.index);

//Create a pet profile
router.post("/", petController.create);

//Show single pet profile
router.get("/:id", petController.show);

//Update pet profile
router.put("/:id", petController.update);

//Delete pet profile
router.delete("/:id", petController.delete);

module.exports = router;
