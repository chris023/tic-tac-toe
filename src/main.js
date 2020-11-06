var game = new Game(new Player(`player1`, `sponge`, JSON.parse(localStorage.getItem('player1'))),
           new Player(`player2`, `starfish`, JSON.parse(localStorage.getItem('player2'))));

var turnDisplay = document.querySelector('.turn-display')
var player1Wins = document.querySelector('.player-1-wins');
var player2Wins = document.querySelector('.player-2-wins');


var gameBoard = document.querySelector('.game-board');
var turnImage = document.querySelector('.turn-image');
var squareOne = document.querySelector('.one')
var squareTwo = document.querySelector('.two')
var squareThree = document.querySelector('.three')
var squareFour = document.querySelector('.four')
var squareFive = document.querySelector('.five')
var squareSix = document.querySelector('.six')
var squareSeven = document.querySelector('.seven')
var squareEight = document.querySelector('.eight')
var squareNine = document.querySelector('.nine')

window.onload = updateWinDisplay();

gameBoard.addEventListener('click', function(event) {
  if (event.target.classList.contains('square') && event.target.innerHTML === "" && game.playable) {
    playPiece(event);
    if (game.checkGameWinner()) {
      establishWinner();
      game.resetGameBoard();
    };
    game.changeTurn();
  }
})

function playPiece(event) {
  var squareNumber = parseInt(event.target.dataset.id);
  var playerImage = game.turn.token;
  game.plays++;
  event.target.insertAdjacentHTML('afterbegin', game.turn.tokenId);
  game.board[squareNumber].splice(0, 1, playerImage)
}

function establishWinner() {
  turnDisplay.innerText = 'won!';
  turnDisplay.insertAdjacentHTML('afterbegin', game.turn.tokenId);
  game.giveWinToPlayer();
  updateWinDisplay()
  game.resetGameBoard();
}

function updateWinDisplay() {
  player1Wins.innerText = `${game.players[0].wins} wins`
  player2Wins.innerText = `${game.players[1].wins} wins`
}
