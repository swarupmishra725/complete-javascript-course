'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0'); 
const current1El = document.getElementById('current--1'); 


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){
      //1.Generating a random dice Roll
      const dice = Math.trunc(Math.random() * 6) + 1;

      //2.Display Dice
      diceEl.classList.remove('hidden');
      diceEl.src = `dice-${dice}.png`;

      //3.Check for rolled 1: if true,
      if (dice != 1) {
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;

        //current0El.textContent = currentScore;
      } else {
        //switch to next player
        switchPlayer();
      }
    }
    
});

btnHold.addEventListener('click',function(){
    if(playing){
      //1.Add current score to active players total score
      scores[activePlayer] += currentScore;
      //scores[1] = scores[1] + curresntScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      //2.Check score < 100
      //If less switch to next player
      if (scores[activePlayer] >= 100) {
        playing = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      }
      // If greter Player wins
      switchPlayer();
    }
    

})

btnNew.addEventListener('click',function(){
    
})