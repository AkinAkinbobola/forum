const express = require("express");
const PostController = require("../controllers/posts")
const CommentController = require("../controllers/comments")

const router = express.Router();

router.get("/", PostController.getAllItems);
router.post("/", PostController.createItem);
router.get("/:id", PostController.viewItem);
router.delete("/:id", PostController.deleteItem);
router.patch("/:id", PostController.updateItem);



router.post("/:id/comments", CommentController.createComment)
router.get("/:id/comments", CommentController.viewComments)
router.delete("/:id/comments/:commentID", CommentController.deleteComment)

module.exports = router;
