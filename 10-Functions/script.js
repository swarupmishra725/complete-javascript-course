'use strict';
/* 
const bookings = [];

const creatBooking = function(flightNum,numPassanger = 1, price = 199 * numPassanger){

    //ES5
    numPassanger = numPassanger || 1;
    price = price || 199; 

    const booking = {
        flightNum,numPassanger,price
    }
    console.log(booking);
    bookings.push(booking);
}

creatBooking('LH123');
creatBooking('LH123',2,800);
creatBooking('LH123', 2);
creatBooking('LH123', 5);
creatBooking('LH123',undefined, 1000); 



const flight = 'LH234';
const jonas = {
    name : 'Jonas Schemedtmann',
    passport : 2345784681
}

const checkIn = function(flightNum, passanger){
    flightNum = 'LH999';
    passanger.name = 'Mr. '+ passanger.name;
    if(passanger.passport === 2345784681){
        alert(`Checked In on `);
    }else{
        alert('Wrong Passport!')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing...
const flightNum = flight;
const passanger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first,...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
};


//Higher Order Function
const transformer = function(str, fn){
    console.log(`Transformed by: ${fn.name}`);
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
}

transformer('JavaScript is the best!',upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click',high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); 


*/
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
const greet= greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

