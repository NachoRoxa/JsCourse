
var scores, roundScores, activePlayer;
scores = [0, 0];
roundScores = 0;
activePlayer = 0;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
  // Do Something in anonymous way, it can't be reuse and cannot be called
  // outside this scope
  var dice = Math.floor(Math.random() * 6) + 1;

  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = './Section4/dice-' + dice + '.png';

  if (dice !== 1) {
    roundScores += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
  } else {
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  scores[activePlayer] += roundScores;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  nextPlayer();

  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    nextPlayer();
  }
});

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  /**
   * This is the same thing that writing
   * the following if statement.
   * if (activePlayer === 0) {
   * activePlayer = 1;
   * } else {
   * activePlayer = 0;
   * }
  */
  roundScores = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}
