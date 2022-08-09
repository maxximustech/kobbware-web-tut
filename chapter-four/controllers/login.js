const path = require("path");
const fs = require("fs");

module.exports.getLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'));
}

module.exports.postLogin = (req, res)=>{
    let users = fs.readFileSync(path.join(__dirname,'../','data.json'));
    let parsedUsers = JSON.parse(users);
    let user = parsedUsers.filter(u => {
        return u.username.toLowerCase() === req.body.username.toLowerCase();
    });
    if(user.length <= 0){
        console.log('User does not exist');
        res.redirect('/login');
        return;
    }
    if(user[0].pass.toString() !== req.body.password.toString()){
        console.log('Password not correct');
        res.redirect('/login');
        return;
    }
    res.redirect('/');
}