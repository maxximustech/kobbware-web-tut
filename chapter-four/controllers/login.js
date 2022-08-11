const path = require("path");
const fs = require("fs");
const User = require('../models/user');

module.exports.getLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'));
}

module.exports.postLogin = (req, res)=>{
    try{
        let user = new User(req.body.username, req.body.password);
        if(user.verify()){
            res.redirect('/');
        }else{
            res.redirect('/login');
        }
    }catch(err){
        console.log(err);
        res.redirect('/login');
    }
}