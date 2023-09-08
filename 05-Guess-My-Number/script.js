'use strict';

/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🤩 Correct NUmber!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);   
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    if(score > 0){
        if (!guess) {       //When there is no input
          //document.querySelector('.message').textContent = '⛔️ No number!';
          displayMessage('⛔️ No number!');
        } else if (guess === secretNumber ) {       //when the guess number is same as random number
          //document.querySelector('.message').textContent =' 🎉 Correct Number!';
          displayMessage(' 🎉 Correct Number!');
          document.querySelector('.number').textContent = secretNumber;
          document.querySelector('body').style.backgroundColor = '#60b347';
          document.querySelector('.number').style.width='30rem';
          if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
          }
          
        } else if (guess > secretNumber) {         //when the guess number is higher than the random number
          document.querySelector('.message').textContent = ' 📈 Too high!';
          score--;
          document.querySelector('.score').textContent = score;
        } else if (guess < secretNumber) {         //When the guess number is lower than the random number
          document.querySelector('.message').textContent = '📉 Too low!';
          score--;
          document.querySelector('.score').textContent = score;
        }
    }else{
        document.querySelector('.message').textContent = ' You lost the game, try again!';
    }
    
})
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = ' Start guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})