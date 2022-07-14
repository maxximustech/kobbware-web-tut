let car = {
    name: 'Volvo',
    wheels: 4,
    doors: 4,
    getInfo: function(){
        return 'The name is '+this.name+', it has '+this.wheels+' wheels.';
    }
};
let user = 'ANTHONY';
let num = 6;
//console.log(num.toString());
//console.log(user.toLowerCase());
//console.log(car);

function Car(name, wheels, doors){
    this.name = name; //public
    this.wheels = wheels;
    this.doors = doors;
    let tyres = 6; //static
    this.getInfo = function(){
        return 'The name is '+this.name+', it has '+this.wheels+' wheels and '+this.doors+' doors.';
    }
}
let car1 = new Car('Volvo', 4, 2);
let car2 = new Car('Toyota', 3, 4);
//console.log(car2.tyres);

//ES6 technology

class Animal{
    constructor(name, color, eyes){
        this.name = name;
        this.color = color;
        this.eyes = eyes;
        this.lives = 3;
        console.log('You have '+this.lives+' life left');
    }
    reduceLife(){
        if(this.live <= 0){
            console.log('Game is over');
        }
        return this.lives--;
    }
    getInfo(){
        return `The name is ${this.name}, it has ${this.eyes} eyes, and it is ${this.color} in color.`;
    }
    static output(){
        return 'You can access me';
    }
}
let users = [];
class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }
    static getUsers(){
        return users;
    }
    saveUser(){
        users.push({
            name: this.name,
            password: this.password
        });
    }
}