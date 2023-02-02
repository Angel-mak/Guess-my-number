'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (guess >= 1 && guess <= 20) {
    if (score > 1) {
      if (!guess) {
        displayMessage('No Number!');
      } else if (guess === secretNumber) {
        displayMessage('Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else if (guess !== secretNumber) {
        displayMessage(`Too ${guess > secretNumber ? 'high' : 'low'}`);
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('You lose');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('Enter valid number!!!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  guess = Number((document.querySelector('.guess').value = ''));
});
