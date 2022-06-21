const mongoose = require("mongoose");

const connectDB = (connectionString) =>{
    return  mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connectDB;

