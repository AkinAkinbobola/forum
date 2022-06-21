const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

UserSchema.plugin(AutoIncrement, {inc_field: 'userID'});

module.exports = mongoose.model("user", UserSchema);

