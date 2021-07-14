/* A Seeder Script is a Script that populates the Database with a Set of Test Data */
require("dotenv").config();

const productsData = require("./data/products.js");
const connectDB = require("./config/db.js");
const Product = require("./model/Product.js");

connectDB();

const importData = async () => {
    try {
        /* Deleting all Products in Database */
        await Product.deleteMany({});
        /* Inserting all Data */
        await Product.insertMany(productsData);
        console.log(`Data Import Success`);
        /* Closing the Process after the Data are imported */
        process.exit();
    } catch(error) {
        console.error("Error while Data Import", error);
        /* Closing the Process with Status Code 1 */
        process.exit(1);
    }
};

importData();