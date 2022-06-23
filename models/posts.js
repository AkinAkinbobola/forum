const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

PostsSchema.plugin(AutoIncrement, {inc_field: 'postID'});

module.exports = mongoose.model("Post", PostsSchema);
