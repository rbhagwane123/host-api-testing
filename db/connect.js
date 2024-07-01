const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
uri = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(uri);
const connectDb = () => {
  console.log("Inside connected database");
  return mongoose.connect(uri);
};

module.exports = connectDb;
