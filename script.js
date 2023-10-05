'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//Reset Botton
document.querySelector('.again').addEventListener('click', function () {
  chances = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(chances);
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  (document.querySelector('.number').textContent = '?'),
    (document.querySelector('.guess').value = '');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //when its a empty result
    if (chances > 1) {
      displayMessage('🚫 Not a Number');
      chances--;
      dis = chances;
    } else {
      displayMessage(' 😪 YOU LOST THE GAME!');
      displayScore(0);
    }
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (chances > highscore) {
      highscore = chances;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (chances > 1) {
      displayMessage(
        guess > secretNumber ? ' 📈 Go More Lower' : ' 📉 Go More Upper'
      );
      chances--;
      displayScore(chances);
    } else {
      displayMessage(' 😪 YOU LOST THE GAME!');
      displayScore(0);
    }
  }
});
