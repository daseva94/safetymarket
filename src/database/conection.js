const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/safetymarket';
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

const conection = mongoose.connection;
conection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });

module.exports = mongoose;
