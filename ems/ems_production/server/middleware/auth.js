const jwt=require("jsonwebtoken");
const { verify } = jwt;

 async function auth(req, res, next) {
    try {
        // console.log("reached auth")
        let token = req.headers.authorization.split(" ")[1];
        let user = await verify(token, process.env.PRIVATE_KEY);
        if(user) {
            req.user = user;
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(403).send("Unauthorized access");
    }
}
module.exports=auth
