const express = require('express');
const app = express();
const connect = require('./db/connect');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(cors({
    origin : "http://127.0.0.1:5500",
    methods : ["GET","POST"],
    allowedHeaders : ['Content-Type'],
}));

app.use(express.json())
app.use(userRoutes);
app.use(express.static(__dirname + "/client"));

connect();
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});