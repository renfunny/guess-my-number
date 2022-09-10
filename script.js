'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = `Correct Number!`; //DOM manipulation since we manipulated the content in the HTML

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no imput
  if (!guess) {
    displayMessage(`No number!`);
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number! :D`);
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = '30rem';

    //Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lost the game! :(`);
      displayScore(0);
    }
  }
  //Again! Button
  document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(`Start guessing...`);
    displayScore(score);
    displayNumber(`?`);
    document.querySelector(`.guess`).value = ``;
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = '15rem';
  });
});
