const Product = require("../model/Product.js");

const getAllProducts = async (request, response) => {
    try{
        /* Finding all Products in Database */
        const products = await Product.find({});
        response.json(products);
    } catch (error) {
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

const getProductById = async (request, response) => {
    try{
        /* Finding Product by Id in Database */
        const product = await Product.findById(request.params.id);
        response.json(product);
    } catch (error) {
        console.error(error);
        response.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById
}