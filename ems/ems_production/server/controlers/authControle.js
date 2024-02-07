const users=require('../db/models/users.js');
const usertypes=require('../db/models/usertypes.js');
const successFunction = require("../utils/response-handler.js").successFunction;
const errorFunction = require("../utils/response-handler.js").errorFunction;
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const revokeManager=require('../manager/revokeManager.js');
const { sign }=jwt;
const sendEmail=require("../utils/userEmail-template/send-email.js").sendEmail;
const forgotPassword=require('../utils/userEmail-template/forgot-password.js').forgotPassword;


exports.login = async function (req, res) {
    try {
      console.log("Request Body:", req.body);
  
      let email=req.body.email;
      let password=req.body.password;
      // let {email,password}=req.body;
      console.log("email and password:",email,password)
  
      if(email && password){
        let user=await users.findOne({
          $and:[{email:email}],
        })
        .populate("usertype")
        console.log("email:",email)
        // console.log("usertype:",usertype)
      
        // let user = await users.findOne({ email:email }).populate("usertype");
        
        // console.log("user",user)
        
  // let user = await users.findOne({ email }).populate('usertype');
       console.log("user", user);
  
        if(!user){
          let response=errorFunction({statusCode:400,message:"User not found"})
          res.status(response.statusCode).send(response)
          return;
        }
        let usertype=user.usertype.usertype;
        let Resetpassword=user.Resetpassword;
        console.log("resetpassowrd:",Resetpassword)
        if(user){
          bcrypt.compare(password,user.password,async(error,auth)=>{
            
            console.log("password",password);
            console.log("user.password",user.password);
            console.log("auth",auth);
            if(auth===true){
              let access_token=jwt.sign(
                {user_id:user._id},
                process.env.PRIVATE_KEY,
                {expiresIn:"10d"}
              );
            let response=successFunction({
              statusCode:200,
              data:access_token,
              message:"Login successfull",
            });
            response.usertype=usertype;
            response.Resetpassword=Resetpassword;
            res.status(response.statusCode).send(response);
            return;
            
          }else{
            let response=errorFunction({
              statusCode:401,
              message:"Invalid credentials"
            });
            res.status(response.statusCode).send(response);
            return;
          }
        })
        }else{
          let response=errorFunction({
            statusCode:401,
            message:"Invalid credentials"
          });
          res.status(response.statusCode).send(response);
          return;
        }
          }else{
            if(!email){
              let response=errorFunction({
                statusCode:422,
                message:"Email is required",
              });
              res.status(response.statusCode).send(response);
              return;
            }
            if(!password){
              let response=errorFunction({
                statusCode:422,
                message:"Password is required",
              });
              res.status(response.statusCode).send(response)
              return;
            }
          }
       
    } catch (error) {
      if(process.env.NODE_ENV=="production"){
        let response=errorFunction({
          statusCode:400,
          message:error
          ?error.message 
             ?error.message
             :error
          :"Something went wrong"
        });
        res.status(response.statusCode).send(response)
        return;
      }else{
        let response=errorFunction({statusCode:400,message:error});
        res.status(response.statusCode).send(response)
        return;
      }
    }
  }

  exports.checkRevoked = function (req, res) {
    return new Promise((resolve, reject) => {
      try {
        const authHeader = req.headers["authorization"];
  
        if (!authHeader) {
          throw new Error("Authorization header is missing");
        }
  
        const token = authHeader.split(" ")[1];
  
        if (!token) {
          throw new Error("Token is missing in the Authorization header");
        }
  
        console.log("Token:", token);
  
        revokeManager
          .checkRevoked(token)
          .then((message) => {
            console.log("Check Revoked Result:", message);
            resolve(message);
          })
          .catch((error) => {
            console.error("Check Revoked Error:", error);
            reject(error);
          });
      } catch (error) {
        console.error("Synchronous Error:", error);
        reject(error);
      }
    });
  };
  
  exports.resetPasswordControler = async function (req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(" ")[1];
  
      let password = req.body.password;
      console.log("password::",password);
      let confirm_password=req.body.confirm;
      console.log("confirm_password::",confirm_password);
      if(password !== confirm_password){
        let response=errorFunction({
          statusCode: 400,
          message: "Password and confirm password do not match",
        });
        console.log("reset password :",response)
        return res.status(response.statusCode).send(response);
       
  
      }
      
      decoded = jwt.decode(token);
     
      let user = await users.findOne({
        $and: [{ _id: decoded.user_id }]
      });
      if (user) {
        let salt = bcrypt.genSaltSync(10);
        let password_hash = bcrypt.hashSync(password, salt);
        let data = await users.updateOne(
          { _id: decoded.user_id },
          { $set: {
            password: password_hash,
            password_token: null,
            Resetpassword: true,
          }, }
        );
        if (data.matchedCount === 1 && data.modifiedCount == 1) {
          let response = successFunction({
            statusCode: 200,
            message: "Password changed successfully",
          });
          res.status(response.statusCode).send(response);
          return;
        } else if (data.matchedCount === 0) {
          let response = errorFunction({
            statusCode: 404,
            message: "User not found",
          });
          res.status(statusCode).send(response);
          return;
        } else {
          let response = errorFunction({
            statusCode: 400,
            message: "Password reset failed",
          });
          res.status(statusCode).send(response);
          return;
        }
      } else {
        let response = errorFunction({ statusCode: 403, message: "Forbidden" });
        res.status(statusCode).send(response);
        return;
      }
    } catch (error) {
      console.log("Error occure in reset password:",error.message ? error.message : message);
    }
  };
  

  exports.forgotPasswordController = async function (req, res) {
    try {
      let email = req.body.email;
  
      if (email) {
        let user = await users.findOne({ email: email });
        if (user) {
          let reset_token = jwt.sign(
            { user_id: user._id },
            process.env.PRIVATE_KEY,
            { expiresIn: "10m" }
          );
          let data = await users.updateOne(
            { email: email },
            { $set: { password_token: reset_token } }
          );
          if (data.matchedCount === 1 && data.modifiedCount == 1) {
            let reset_link = `${process.env.FRONTEND_URL}/forgot/password?token=${reset_token}`;
            let email_template = await forgotPassword(user.first_name, reset_link);
            sendEmail(email, "Forgot password", email_template);
            let response = successFunction({
              statusCode: 200,
              message: "Email sent successfully",
            });
            res.status(response.statusCode).send(response);
            return;
          } else if (data.matchedCount === 0) {
            let response = errorFunction({
              statusCode: 404,
              message: "User not found",
            });
            res.status(response.statusCode).send(response);
            return;
          } else {
            let response = errorFunction({
              statusCode: 400,
              message: "Password reset failed",
            });
            res.status(response.statusCode).send(response);
            return;
          }
        } else {
          let response = errorFunction({ statusCode: 403, message: "Forbidden" });
          res.status(response.statusCode).send(response);
          return;
        }
      } else {
        let response = errorFunction({
          statusCode: 422,
          message: "Email is required",
        });
        res.status(response.statusCode).send(response);
        return;
      }
    } catch (error) {
      if (process.env.NODE_ENV == "production") {
        let response = errorFunction({
          statusCode: 400,
          message: error
            ? error.message
              ? error.message
              : error
            : "Something went wrong",
        });
  
        res.status(response.statusCode).send(response);
        return;
      } else {
        let response = errorFunction({ statusCode: 400, message: error });
        res.status(response.statusCode).send(response);
        return;
      }
    }
  };

  exports.logout = async function (req, res) {
    try {
      console.log("reached the logoutt");
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(" ")[1];
      if (!token) {
        let response = errorFunction({
          statusCode: 400,
          message: "Token is required",
        });
        res.status(response.statusCode).send(response);
        return;
      }
  
      let isRevoked = await revokeManager.checkRevoked(token);
      //console.log("isRevoked : ", isRevoked);
      if (!isRevoked) {
        revokeManager.revoke(token)
          .then((result) => {
            let response = successFunction(result);
            res.status(result.status).send(response);
            return;
          })
          .catch((error) => {
            let response = errorFunction(error);
            res.status(error.status).send(response);
            return;
          });
      } else {
        //console.log("Token already in revoked list");
        res.status(406).send(
          errorFunction({
            statusCode: 406,
            message: "Token already in revoked list",
          })
        );
      }
    } catch (error) {
      if (process.env.NODE_ENV == "production") {
        let response = errorFunction({
          statusCode: 400,
          message: error
            ? error.message
              ? error.message
              : error
            : "Something went wrong",
        });
  
        res.status(response.statusCode).send(response);
        return;
      } else {
        let response = errorFunction({ statusCode: 400, message: error });
        res.status(response.statusCode).send(response);
        return;
      }
    }
  };
  
