const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet");
const commentController = require("../controllers/comment");

router.get("/pets/", petController.index);
// router.post("/pets/", petController.create);
// router.get("/pets/:id", petController.show);
// router.put("/pets/:id", petController.update);
// router.delete("/pets/:id", petController.delete);

// router.get("/comments", commentController.index);
// router.get("/comments/:id", commentController.show);
// router.post("/comments", commentController.create);
// router.put("/comments/:id", commentController.update);
// router.delete("/comments/:id", commentController.delete);

module.exports = router;
