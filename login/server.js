const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/connect');
//Database Connection
connect();

app.get('/test', (req, res) => {
    res.status(200).send("success");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});