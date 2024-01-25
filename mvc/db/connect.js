const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI)
        .then((message) => {
            console.log("Database connection established");
        })
        .catch((error) => {
            console.log("Database not connected");
            console.log("Connection error : ", error);
        })
}

module.exports = connect;