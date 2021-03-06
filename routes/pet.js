const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet");
const commentController = require("../controllers/comment");

router.get("/api/pets/", petController.index);
router.post("/api/pets/", petController.create);
router.get("/api/pets/:id", petController.show);
router.put("/api/pets/:id", petController.update);
router.delete("/api/pets/:id", petController.delete);
router.put("/api/pets/:id/licks", petController.lickUpdate);
router.put("/api/pets/:id/comment", petController.comment);
router.put("/api/pets/:id/comment/delete", petController.delcomment);

router.get("/api/comments", commentController.index);
router.get("/api/comments/:id/author", commentController.author);
router.get("/api/comments/:id", commentController.show);
router.post("/api/comments", commentController.create);
router.put("/api/comments/:id", commentController.update);

module.exports = router;
