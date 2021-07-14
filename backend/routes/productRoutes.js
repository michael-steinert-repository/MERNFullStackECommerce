const express = require("express");
const router = express.Router();

const {getAllProducts, getProductById} = require("../controller/productController.js");

/* Get all Products from Database*/
//@desc GET all products from db
//@route GET /api/v1/products
//@access Public
router.get("/", getAllProducts);

/* Get all Products by Id from Database*/
//@desc GET all products by id from db
//@route GET /api/v1/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
