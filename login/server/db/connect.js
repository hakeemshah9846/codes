const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
async function connect() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
            .then((message)=> {
                // console.log("Database connection successful : ", message);
                console.log("Database connection established");
            })
            .catch((error) => {
                console.log("Database not connected");
                console.log("Database connection not established : ", error);
            })
    } catch (error) {
        console.log("Database not connected");
        console.log("Database connection error : ", error);  
    }
}

module.exports = connect;