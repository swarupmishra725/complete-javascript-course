'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIngridient, ...otherIngredients){
    console.log(mainIngridient);
    console.log(otherIngredients);
  },

}; 

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Gianhua Tang',
};

//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//Nullish assignment operator(null or undefinrd)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner && ='<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
/*
//////////////////////////////////////
//The Nullish Coalescing Operator
//restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////////////////////////////////////
//Short Circuiting (&& and ||)
console.log(`--------OR Operator-----------`);
//Use of ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 'Jonas');
console.log(undefined || 'Jonas');

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0

const guests1 = restaurant.numGuests ? restaurant.numGuests : null;
console.log(guests1);

const guest2 = restaurant.numGuests || null;
console.log(guest2);

console.log(`--------AND Operator-----------`);
console.log(0 && 'Jonas');
console.log(5 && 'Jonas');

console.log('Jonas' && 23 && null && 'Hello');

if(restaurant.orderPizza){
  restaurant.orderPizza('Mushroom','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom','Spinach');

 // 1) Destructuring

//SPREAD, because on RIGHT side of = 
const arr = [1,2,...[3,4]];

//REST, because on left side of =
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza,,risorro,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risorro,...otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//2)Functions

const add = function(...numbers){
  let sum = 0;
  for(let i =0; i < numbers.length;i++) sum+= numbers[i];
  console.log(sum);
}
add(2,3);
add(2,5,7,9,4,6);
add(1,2,3,4,5,6,7,8,9);

const x = [23,5,7];
add(...x);


restaurant.orderPizza('mushroom','onion','olives','spinash');
restaurant.orderPizza('mushroom'); 

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2,...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(...newMenu);

//Copy Array

const mainMenuCopy = [...restaurant.mainMenu];


// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

//Iterables: arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str,'','S.'];
console.log(letters);


//Real World Example
const ingridients = [prompt('Let\'s make pasta! Ingredient 1?'),
prompt('Ingredient 2?'),
prompt('Ingredient 3?'),];

console.log(ingridients);

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
restaurant.orderPasta(...ingridients); 

//Objects

const newRestaurants = {founderIn: 1998,...restaurant, founder: 'Guiseppe'};
console.log(newRestaurants);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);


////////////////////////////////////
//Destrcturing objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'NewCastel, UK',
  mainIndex: 2,
  starterIndex: 2,
})
restaurant.orderDelivery({
  address: 'NewCastel, UK',
  starterIndex: 0,
});

const {name,openingHours,categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName,hours,tags);

const {menu = [], starterMenu: starters=[]} = restaurant;
console.log(menu,starters);


//Mutating Variables
let a = 111;
let b = 999;
const obj = {a: 23,b: 7, c: 14};

({ a, b } = obj);
console.log(a,b);

//Nested Objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
 */
/*
//Destructuring Array 
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  }
};

const arr = [1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const  [x,y,z] = arr;
console.log(arr);

let [main,secondary] = restaurant.categories;
console.log(main, secondary);


//Swithing variables
const temp = main;
main = secondary ;
secondary = temp;
console.log(main, secondary); 

[main,secondary] = [secondary,main];
console.log(main,secondary);

//Recieve 2 return values from a function
const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);


//Nester destructuring
const nested = [2,4,[5,6]];
const [i,,j] = nested;
console.log(i,j);  

const [i,,[j,k]] = nested;
console.log(i,j,k);

//Default destructuring

const [p = 1, q = 2, r =  3] = [8,9];
console.log(p, q, r); */

//////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

cconst game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};