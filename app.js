require('dotenv').config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

const connectDb = require('./db/connect');

app.get("/", (req, res) => {
  res.send("Hi i am live");
});

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
