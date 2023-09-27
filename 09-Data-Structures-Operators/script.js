'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngridient, ...otherIngredients) {
    console.log(mainIngridient);
    console.log(otherIngredients);
  },
}; 


const airline = 'TAP Air Portugal';
const plane = 'A320';
 
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
 
console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-5));

const flights = 
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const cheeckMiddleSeat = function(seat){
  //B and E are the middle seats
  const s = seat.slice(-1);
  if( s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You are Lucky');
};
cheeckMiddleSeat('11B');
cheeckMiddleSeat('19C');
cheeckMiddleSeat('22A');
cheeckMiddleSeat('27D');
cheeckMiddleSeat('29E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));

console.log(typeof new String('Jonas').slice(1)); 
*/

/* 
const airline = 'TAP Air Portugal';


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in name
const passanger = 'jOnAS';
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0]+passangerLower.slice(1);

console.log(passangerLower,passangerCorrect);

//Compairing Email

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();

//console.log(trimedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

//Replacing 
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passanger come to the boarding door 23. Boarding door 23!';
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Parts of the new Airbus Family');
}

//Practice Exercise

const checkBaggage = function(items){
  const baggsge = items.toLowerCase();
  if(baggsge.includes('knief') || (baggsge.includes('gun'))) {console.log('You are not allowed');}
  else {console.log('Welcome onboard');}
};
checkBaggage('I have a Laptop, some food, and a pocket knief');
checkBaggage('I have clocth, watch and food');
checkBaggage('I ahave snacks, cloth, a gun'); 
*/

console.log('a+very+nice+string'.split('+'));
console.log('Swarup Mishra'.split(' '));

const [firstName, LastName] = 'Swarup Mishra'.split(' ');

const newName = ['Mr. ',firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    //namesUpper.push(n[0].toUpperCase()+n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('swarup mishra');

//Padding
const mesage = 'Go to the gate 21!';
console.log(mesage.padStart(25, '+').padEnd(35, '+'));
console.log('Swarup'.padStart(25, '+').padEnd(35, '+'));


const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4596845789246813));
console.log(maskCreditCard(4596845789245169));

/////////////////////////////////////////////////////////
/* 
const question = new Map([
  ['question','What is the best programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct',3],
  [true, 'Correct 🎉'],
  [false,'Wrong, Try Again']
]);
console.log(question);

//Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app

console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
};
//const answer = Number(prompt('Your Answer'));
const answer = 3
console.log(answer);

console.log(question.get(answer === (question.get('correct'))));

//Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/////////////////////////////////////////////////////////
//MAPS
/* const rest = new Map();
rest.set('name', 'Classio Italiano');
rest.set(1, 'Fireneze, Italy');
//console.log(rest.set(2, 'Lisbon, Portugal'));
  rest
    .set('categories', ['Italoian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true,'We are Open')
    .set(false,'We are Closed!! :(');

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  //rest.clear();
  const arr = [1,2]
  rest.set(arr,'Test'); 

  rest.set(document.querySelector('h1'),'Heading');
  console.log(rest);
  console.log(rest.size);

console.log(rest.get(arr)); */


/////////////////////////////////////////////
//Sets
/* 
const ordersSet = new Set(['Pasta','Pizza','Pizza','Risoto','Pasta','Pizza']);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet);

ordersSet.delete('Risoto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('swarupmishra').size);
 */
//////////////////////////////////////////////////////////////////////////////////////
/*

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`);

for(const day of Object.keys(openingHours)){
  console.log(day);
}

let openStr = `We are open on ${properties.length} days:`;
for(const day of properties){
  openStr += `${day},`;
}
console.log(openStr)


//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entry objects
const entries = Object.entries(openingHours);
console.log(entries);

//
for(const [key,{open,close}] of entries){
  console.log(`On ${key} we opwn at ${open} and close at ${close}`);
} */
/* 
//////////////////////////////////////////////
//Optional Chaining 
if(restaurant.openingHours.thu.open) console.log(restaurant.openingHours.thu.open);

//Optiotal chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}




//Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRissotato?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
console.log(users[0] ?.name ?? 'User array empty');

//FOR-OF use
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for (const item of menu) console.log(item);

for(const item of menu.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i,el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
 */
//console.log([...menu.entries()]);
/*
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

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

*/

/* const game = {
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
  }
};
//1
const [players1,players2] = game.players;
//2
const[gk1,...fieldplayers1] = players1;
const [gk2, ...fieldplayers2] = players2;
//3
const allplayers = [...players1,...players2];
//4
const players1Final = [...players1,'Thiago','Coutinho','Perisic'];
//5
const { odds: { team1, x: draw, team2 }} = game;
//console.log(team1,draw,team2 );
//6
  const printGoals= function(...players){
    console.log(...players);
    console.log(`${players.length} goals were scored`);
  };

  printGoals(...game.scored);

  //7
// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win'); 


///////////////////////////////////////
// Coding Challenge #2


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


//1
for (const [i,goal] of game.scored.entries()) console.log(`Goal ${i+1} ${goal}`);
2//
const odds = Object.values(game.odds)
let average = 0;
for(const odd of Object.values(game.odds))
      average += odd;
average /= odds.length;
console.log(average);
3///
for (const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
};
 */

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/* 
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
 */