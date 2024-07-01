const mongoose = require("mongoose");

uri = "mongodb://0.0.0.0:27017/";
const connectDb = () => {
  console.log("Inside connected database");
  return mongoose.connect(uri);
};

module.exports = connectDb;
