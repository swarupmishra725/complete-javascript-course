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

const addTax1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax1(0.23);
console.log(addVAT2(100));
console.log(addVAT2(200));
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer : function(num){
    //Get Answer
    const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n Write only Option Number !!`));
    console.log(answer);

    //Register answer

    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    console.log(this.answers);
  },
  displayResults(type = 'array'){
    if(type === 'array'){
        console.log(this);
    }
};


//poll.registerNewAnswer(1);

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

 