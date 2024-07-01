const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsTesting,
  getAllSortedProducts
  
} = require("../controllers/product");

router.route("/").get(getAllProducts);
router.route("/sort").get(getAllSortedProducts);
router.route("/testing").get(getAllProductsTesting);
// router.route("/").get(getAllProducts);
// router.route("/").get(getAllProducts);

module.exports = router;
