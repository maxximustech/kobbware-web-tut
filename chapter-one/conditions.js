//Switch
let username = 'Sunny';
username = username.toLowerCase();
switch(username){
    case 'sunny':
        console.log('it is sunny');
        break;
    case 'maxx':
        console.log('it is maxx');
        break;
    case 'anthony':
        console.log('it is anthony');
        break;
    default:
        console.log('it is none of the users');
}

if(username === 'anthony'){
    console.log('Anthony is logged in');
}else if(username === 'michael'){
    console.log('Michael is logged in');
}else if(username === 'sunny'){
    console.log('Sunny is logged in');
}else{
    console.log('None of the users is logged in');
}