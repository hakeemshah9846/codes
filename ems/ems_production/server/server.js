const express=require('express');
const dotenv=require('dotenv');
const conn=require('./db/config.js');
const authRouter=require('./router/authRouter.js')
const userRouter=require('./router/userRoutes.js')
const cors=require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use('/uploads',express.static(__dirname+"/uploads"));
app.use('/',express.static(__dirname + '/public'));
app.use(express.json());
app.use(authRouter);
app.use(userRouter);

//test api
app.get('/test',(req, res)=> {
    res.status(200).send("Test successful");
})

conn().then(() => {
    app.listen(process.env.PORT, error => {
        if(error) {
            console.log(error);
            return;
        }
        console.log("Server started at Port " +process.env.PORT);
    });
})
.catch(error => {
    console.log(error);
})

module.exports = app;