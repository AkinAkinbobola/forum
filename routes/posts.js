const express = require("express");
const PostController = require("../controllers/posts")
const router = express.Router();

router.get("/", PostController.getAllItems);
router.post("/", PostController.createItem);
router.get("/:id", PostController.viewItem);
router.delete("/:id", PostController.deleteItem);
router.patch("/:id", PostController.updateItem);

module.exports = router;
