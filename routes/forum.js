const express = require("express")
const registerRouter = require("./signup");
const loginRouter = require("./signin");
const postRouter = require("./posts")
const commentRouter = require("./comments")
const router = express.Router();

router.use("/sign-up", registerRouter)
router.use("/sign-in", loginRouter)
router.use("/posts", postRouter)
router.use("/comments", commentRouter)


module.exports = router;
