const express = require('express');
const app = express();
const connect = require('./db/connect');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json())
app.use(userRoutes);

connect();
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});