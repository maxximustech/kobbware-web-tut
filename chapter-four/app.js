const http = require('http');
const exp = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = exp();

app.use(bodyParser.urlencoded({extended: false}));
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','login.html'));
});
app.post('/login',(req,res)=>{
    let users = fs.readFileSync('data.json');
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
});

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','signup.html'));
});

app.post('/signup',(req,res, next)=>{
    let user = req.body;
    let users = fs.readFileSync('data.json');
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
    fs.writeFileSync('data.json',JSON.stringify(parsedUsers));
    res.redirect('/login');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','dom.html'));
});

app.use((req,res)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,'html','404.html'));
});

/*app.use((req, res, next)=>{
    //console.log(path.join(__dirname,'html','dom.html'));
    //res.sendFile(__dirname+'/html/dom.html');
    res.status(200);
    //res.sendFile(path.join(__dirname,'html','dom.html'));
    res.json({
        title: 'Node Project',
        description: 'A complete tutorial on node js'
    });
});

 */

const server = http.createServer(app);
server.listen(4000);