
var scores, roundScores, activePlayer;
scores = [0, 0];
roundScores = 0;
activePlayer = 1;

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
});
