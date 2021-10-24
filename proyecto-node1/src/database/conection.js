const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", function(){
    console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;