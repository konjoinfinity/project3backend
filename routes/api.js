const express = require("express");
const router = express.Router();
const petController = require("../controllers/api");

router.get("/pets/", petController.index);
// router.get("/api/bourbons/:name", bourbonController.show);
// router.post("/api/bourbons/", bourbonController.create);
// router.put("/api/bourbons/:name", bourbonController.update);
// router.delete("/api/bourbons/:name", bourbonController.delete);

module.exports = router;
