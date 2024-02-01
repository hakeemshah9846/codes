const jwt = require('jsonwebtoken');
const error_function = require('./response-handler').error_function;
const success_function = require('./response-handler').success_function;
let users = require('../db/models/users');
const dotenv = require('dotenv');
dotenv.config();

exports.checkLogin = function (req, res, next) {
    try {
        let token = req.headers['authorization'].split(' ')[1];
        console.log("token : ", token);
        if(!token) {
            let response = error_function({
                statusCode : 400,
                message : "Invalid token",
            });
            res.status(response.statusCode).send(response);
            return;
        }else {
            jwt.verify(token, process.env.PRIVATE_KEY, async function(err, decoded) {
                if(err) {
                    let response = error_function({
                        statusCode : 400,
                        message : err.message?err.message:err,
                    })
                }else {
                    let user_id = decoded.user_id;
                    console.log("user_id : ", user_id);
                    let user = await users.findOne({_id : user_id});
                    console.log("user : ", user);
                    if(!user) {
                        let response = error_function({
                            statusCode : 400,
                            message : "Login user not found",
                        });
                        res.status(response.statusCode).send(response);
                        return;
                    }else {
                        req.user_id = user._id;
                        next();
                    }
                }
            })
        }
    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : error.message?error.message:error,
        });
        res.status(response.statusCode).send(response);
    }
}