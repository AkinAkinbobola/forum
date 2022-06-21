const express = require("express")
const registerRouter = require("./register");
const loginRouter = require("./login");
const postRouter = require("./posts")
const router = express.Router();

router.use("/register", registerRouter)
router.use("/login", loginRouter)
router.use("/posts", postRouter)


module.exports = router;
