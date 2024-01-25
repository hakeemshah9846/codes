const users = require('../db/models/users');

async function createUser(req, res) {
    try {
        const datas = req.body;

        const new_user = await users.create(datas);
        console.log("new_user : ", new_user);
        if(new_user) {
            res.status(201).send("success");
        }else {
            res.status(400).send('failed');
        }

    } catch (error) {
        console.log("error : ", error);
        res.status(400).send("failed");
    }
}

module.exports = {
    createUser,
}