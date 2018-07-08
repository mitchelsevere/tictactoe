function Game(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.board = new Board();
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

function TicTacGame(playerOne, playerTwo) {
  this.board = new TicTacBoard();
  Game.call(this, playerOne, playerTwo);
}

TicTacGame.prototype = Object.create(Game.prototype);
TicTacGame.prototype.constructor = TicTacGame;