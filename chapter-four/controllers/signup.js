const path = require("path");
const fs = require("fs");
const User = require('../models/user');

exports.getSignUp = (req, res)=>{
    res.sendFile(path.join(__dirname,'../views','signup.html'));
}

exports.postSignUp = (req, res)=>{
    try{
        let user = new User(req.body.username, req.body.password);
        user.save();
        res.redirect('/login');
    }catch(err){
        console.log(err);
        res.redirect('/signup');
    }
}