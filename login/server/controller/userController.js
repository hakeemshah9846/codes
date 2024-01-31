const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function  = require('../utils/response-handler').error_function;
const jwt = require('jsonwebtoken');

exports.signup = async function(req, res) {

    try {
        const datas = req.body;
        console.log("datas : ", datas);

        //Validate user exists or not
        const isUserExist = await users.findOne({email : datas.email});

        if(isUserExist) {
            const response = error_function({
                statusCode : 400,
                message : "User already exist",
            });

            res.status(response.statusCode).send(response);
            return;
        }
    
       const new_user = await users.create(req.body);
    
       if(new_user) {

        console.log("User created successfully : ", new_user);

        const response = success_function({
            statusCode : 201,
            data : new_user,
            message : "Account created successfully",
        });

        res.status(response.statusCode).send(response);
        return;
       }else {
        console.log("User creation failed");
        
        const response = error_function({
            statusCode : 400,
            message : "Signup failed",
        });

        res.status(response.statusCode).send(response);
        return;
       }
    } catch (error) {
        console.log("user creation error : ", error);

        const response = error_function({
            statusCode : 400,
            message : "Signup failed",
        });

        res.status(response.statusCode).send(response);
        return;    
    }

}

exports.getData = async function (req,res) {
    let user_datas = await users.find().select('-__v');
    let response = success_function({
        statusCode : 200,
        data : user_datas,
        message : "User datas found successfully",
    });
    res.status(response.statusCode).send(response);
    return;
}