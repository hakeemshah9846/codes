const users = require('../db/models/users');
let success_function = require('../utils/response_handler').success_function;
const error_function = require('../utils/response_handler').error_function;

async function createUser(req, res) {
    try {
        const datas = req.body;

        const new_user = await users.create(datas);
        console.log("new_user : ", new_user);
        if(new_user) {
            let response = success_function({
                status : 201,
                data : new_user,
                message : "User created successfully",
            })
            res.status(res.statusCode).send(response);
            // res.status(201).send("success");
        }else {
            let response = error_function(
                {
                    status : 400,
                    message : "User creation failed",
                }
            );
            res.status(response.statusCode).send(response);
            // res.status(400).send('failed');
        }

    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            status : 400,
            message : error.message?error.message:error,
        })
        res.status(response.statusCode).send(response);
    }
}

module.exports = {
    createUser,
}