const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const userModels = require("../models/users");


router.post("/", async (req, res) =>{
    const {username, password} = req.body
    try{
        const user = await userModels.findOne({username});

        if (!user){
            return res.status(404).json({msg: "Invalid Username/Password"});
        }

        if (await bcrypt.compare(password, user.password)){
            const token = jwt.sign({
                id: user.id,
                username: user.username
            }, process.env.JWT_SECRET)
            res.header("auth-token", token)
            return res.status(200).json({user})
        }
        res.status(404).json({msg: "Invalid Username/Password"});

    }catch (e) {
        res.status(404).json({msg: e.message})
    }

})

module.exports = router
