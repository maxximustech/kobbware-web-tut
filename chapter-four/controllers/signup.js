const path = require("path");
const fs = require("fs");

exports.getSignUp = (req, res)=>{
    res.sendFile(path.join(__dirname,'../views','signup.html'));
}

exports.postSignUp = (req, res)=>{
    let user = req.body;
    let users = fs.readFileSync(path.join(__dirname,'../','data.json'));
    let parsedUsers = JSON.parse(users);
    let check = parsedUsers.filter(u => {
        return u.username.toLowerCase() === user.username.toLowerCase();
    });
    if(check.length > 0){
        console.log('Username already exist');
        res.redirect('/signup');
        return;
    }
    parsedUsers.push({
        username: user.username,
        pass: user.password
    });
    fs.writeFileSync(path.join(__dirname,'../','data.json'),JSON.stringify(parsedUsers));
    res.redirect('/login');
}