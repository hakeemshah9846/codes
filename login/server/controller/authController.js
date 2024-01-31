const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.login = async function(req, res) {
    try {
        const datas = req.body;
        const email = datas.email;
        console.log("email : ", email);
        const password = datas.password;
        console.log("password : ", password);

        let user = await users.findOne({email : email});

        if(user) {
            let db_password = user.password;
            console.log("db_password : ", db_password);
            let user_id = user._id;
            console.log("user_id : ", user_id);

            //Check password matches db_password
            if(password === db_password) {
                let access_token = jwt.sign({user_id},process.env.PRIVATE_KEY,{expiresIn : "10d"});
                console.log("access_token : ", access_token);

                let response = success_function({
                    statusCode : 200,
                    data : access_token,
                    message : "Login Successful",
                });

                res.status(response.statusCode).send(response);
                return;
            }else {
                let response = error_function({
                    statusCode : 200,
                    message : "Invalid password",
                });
                res.status(response.statusCode).send(response);
                return;
            }
        }else {
            let response = error_function({
                statusCode : 400,
                message : "User not found",
            });
            res.status(response.statusCode).send(response);
            return;
        }
    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "Something went wrong", 
        });
        res.status(response.statusCode).send(response);
        return;
    }
}