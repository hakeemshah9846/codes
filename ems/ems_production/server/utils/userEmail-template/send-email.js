'use strict';
const nodemailer=require('nodemailer');
const dotenv=require('dotenv')
dotenv.config()
exports.sendEmail=async function(emails,subject,content){
    return new Promise(async(resolve,reject)=>{
        try{
            if(typeof emails== 'object') emails=emails.join(',');
            let transporter=nodemailer.createTransport({
                host:process.env.EMAIL_HOST,
                Port:process.env.EMAIL_PORT,
                secure:process.env.EMAIL_PORT == 465 ? true: false,
                auth:{
                    user:process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                }
            });
            console.log("email:",emails);
            console.log("subject:",subject);
            console.log("content:",content);




            let info=await transporter.sendMail({
                from:'"ems" <support@ems.com>',
                to:emails,
                subject:subject,
                html:content
            }
               
            )
            resolve(true)
        }catch(error){
            console.log("error in send email::",error.message?error.message:error)
  reject(false)
        }
    })
}