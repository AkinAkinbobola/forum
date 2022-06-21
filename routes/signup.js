const express = require("express")
const router = express.Router();
const userModels = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = await userModels.create({username: req.body.username, password: hashedPassword});
        res.status(200).json({data})
    }catch (e) {
        res.status(404).json({e});
    }
})

module.exports = router;
