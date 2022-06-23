const express = require("express");
const CommentController = require("../controllers/comments")
const router = express.Router();

router.post("/", CommentController.createComment)
router.get("/", CommentController.viewComments)
router.delete("/:commentID", CommentController.deleteComment)

module.exports = router;
