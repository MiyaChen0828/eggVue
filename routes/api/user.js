const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = require("../../config/key").privateKey;


router.get("/test",(req,res) =>{
    res.json({msg:"login works"});
})

//注册接口
router.post("/register",(req,res) =>{
    User.findOne({email:req.body.email}).then(user =>{
        if(user){
            return res.status(400).json({email:"邮箱已被注册！"})
        }else{
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                identity:req.body.identity
            })
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, function(err, hash) {
                    if(err){ throw err}
                    newUser.password = hash
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                });
            });
        }
    })
})

//登录接口
router.post("/login",(res,req) =>{
    let email = res.body.email;
    let password = res.body.password;
    User.findOne({email:email}).then((user) =>{
        if(!user){
            return req.status(400).json("用户不存在");
        }else{
            bcrypt.compare(password, user.password, function(err, res) {
                if(res){
                    let rule = {id:user.id,email:user.email};
                    jwt.sign(rule, privateKey, { expiresIn: '3600'},(err,token) => {
                        if (err) throw err;
                        req.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    });
                }else{
                    return req.status(400).json('密码错误!');
                }
                
            });
        }
    })
})
module.exports = router;