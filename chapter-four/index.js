const fs = require('fs');
let name = 'Anthony';
let age = 15;
let gender = 'Male';

let users = fs.readFileSync('data.json');
let parsedUsers = JSON.parse(users);
parsedUsers.push({
    name: name,
    age: age,
    gender: gender
});

fs.writeFileSync('data.json',JSON.stringify(parsedUsers));

//fs.writeFileSync('data.json','{title: "Node"}');