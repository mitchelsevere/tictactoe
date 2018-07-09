function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = playerOne;
}

Game.prototype.switchPlayer = function() {
  if (this.turn === 2) {
      this.turn = 1;
      this.currentPlayer = this.playerOne;
      return this.playerTwo;
  } else {
      this.turn = 2;
      this.currentPlayer = this.playerTwo;
      return this.playerOne;
  }
}

Game.prototype.marked = function(grid) {
  if (grid.innerText) {
    
  }
}

Game.prototype.board = new Board();

function TicTacGame(playerOne, playerTwo) {
  Game.call(this, playerOne, playerTwo);
}

TicTacGame.prototype = Object.create(Game.prototype);
TicTacGame.prototype.constructor = TicTacGame;

TicTacGame.prototype.board = new TicTacBoard();