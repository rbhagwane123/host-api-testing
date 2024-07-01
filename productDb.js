require("dotenv").config();
const connectDb = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require('./productDetails.json')

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
