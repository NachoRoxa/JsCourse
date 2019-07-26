/**
 * Coding Challenge
 * change the game to follow these rules:
 * 1.- A player looses his ENTIRE score when he rolls two 6 in a row.
 * After that is the next player's turn.
 * 2.- Add an unput field to the HTML where players can set the winning score,
 * so that they can change the predefined socre of 100.
 * 3.- Add another dice to the gme, so that there are two dices now. The
 * player looses his current socre when one of the is a 1.
 */

var scores, roundScores, activePlayer, gamePlaying;
init();

var lastDice1;
var lastDice2;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;

document.querySelector('.btn-roll').addEventListener('click', function () {
  // Do Something in anonymous way, it can't be reuse and cannot be called
  // outside this scope

  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // var diceDom = document.querySelector('.dice');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';

    document.getElementById('dice-1').src = './Section4/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = './Section4/dice-' + dice2 + '.png';

    // Original Winning Condition
    // if (dice1 !== 1 && dice2 !== 1) {
    //   roundScores += dice1 + dice2;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScores;
    // } else {
    //   nextPlayer();
    // }

    if (dice1 === 6 && lastDice1 === 6 && dice2 === 6 && lastDice2 === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
      roundScores += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
      nextPlayer();
    }

    lastDice1 = dice1;
    lastDice2 = dice2;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScores;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var scoreLimit = document.querySelector('.score-limit').value;
    var winningScore;

    if (scoreLimit) {
      winningScore = scoreLimit;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer () {
  /**
   * This is the same thing that writing
   * the following if statement.
   * if (activePlayer === 0) {
   * activePlayer = 1;
   * } else {
   * activePlayer = 0;
   * }
  */

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScores = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
