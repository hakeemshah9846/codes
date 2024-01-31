const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/connect');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
//Database Connection
connect();

//Cors middleware
app.use(cors());

//Parsing JSON
app.use(express.json());

//Parsing form datas
app.use(express.urlencoded({extended : false}));

//userRoutes
app.use(userRoutes);

//authRoutes
app.use(authRoutes);

app.get('/test', (req, res) => {
    res.status(200).send("success");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});