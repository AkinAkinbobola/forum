const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
})

CommentSchema.plugin(AutoIncrement, {inc_field: 'commentID'});

module.exports = mongoose.model("Comment", CommentSchema);

