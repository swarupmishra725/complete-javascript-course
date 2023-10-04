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
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){}
  book(flightNum,name) {
    console.log(`${name} booked a seat on ${this.airline} flight no ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`,  name});
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(23, 'Sarah Williams');

//Call Method
//book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply Method
const flightData = [583, ' Geroge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

//Bind Method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedmers');
bookEW23('Marths Cooper');
console.log();

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23;

console.log(addVAT(200));
console.log(addVAT(100));

//const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }


