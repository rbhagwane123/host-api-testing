const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
// uri =
//   "mongodb+srv://riokumar3757:124MivEO322U3igf@rupestestingapi.pt7y0o7.mongodb.net/rupestestingapi?retryWrites=true&w=majority&appName=RupesTestingApi";
// const client = new MongoClient(uri);
const connectDb = (uri) => {
  console.log("Inside connected database");
  console.log(uri);
  return mongoose.connect(uri);
};

module.exports = connectDb;

// riokumar3757
// 124MivEO322U3igf
