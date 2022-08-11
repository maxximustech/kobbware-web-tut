const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('index',{
        title: 'Welcome to Edubar',
        message: 'Hello World',
        users: User.fetchAll()
    });
});

const server = http.createServer(app);
server.listen(3000);