const http = require('http');
const exp = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const userRoutes = require('./routes/user');

const app = exp();
app.use(bodyParser.urlencoded({extended: false}));

app.use(userRoutes);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'html','dom.html'));
});

app.use((req,res)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,'html','404.html'));
});

const server = http.createServer(app);
server.listen(4000);