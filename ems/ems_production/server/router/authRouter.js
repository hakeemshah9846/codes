
const express=require("express");
const router=express.Router();
const authControle=require('../controlers/authControle');
const accesscontrol=require("../utils/accesscontrol").accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
        accesscontrol(access_type,req,res,next)
    }
}
router.post('/login',setAccessControl('*'),authControle.login);
router.post('/reset-password',setAccessControl('*'),authControle.resetPasswordControler);
router.post('/forgot-password',setAccessControl('*'),authControle.forgotPasswordController);

router.post('/logout',setAccessControl('*'),authControle.logout);

module.exports=router