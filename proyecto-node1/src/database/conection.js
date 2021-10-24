const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/safetymarket"
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", function(){
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;