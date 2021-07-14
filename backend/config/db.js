require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connection Success");
    } catch (error) {
        console.error("MongoDB Connection Failure", error);
        /* Exit the Server */
        process.exit(1);
    }
}

module.exports = connectDB;