require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");

connectDB();

const app = express();

/* Handling JSON Data from Client */
app.use(express.json());

/* Routes */
app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});