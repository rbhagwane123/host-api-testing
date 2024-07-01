const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, price, sort } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (price) {
    queryObject.price = price;
  }
  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  const productData = await apiData;
  res.send(productData);
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "Giving all the product for testing" });
};
const getAllSortedProducts = async (req, res) => {
  const productData = await Product.find(req.query).sort("price"); //in ascending order default
  // const productData = await Product.find(req.query).sort("-price"); //in descending order default
  res.send(productData);
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
  getAllSortedProducts,
};
