const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/connect');
const userRoutes = require('./routes/userRoutes');
//Database Connection
connect();

//Parsing JSON
app.use(express.json());

//Parsing form datas
app.use(express.urlencoded({extended : false}));

//userRoutes
app.use(userRoutes);

app.get('/test', (req, res) => {
    res.status(200).send("success");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});