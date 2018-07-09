function Board() {

}

Board.prototype.spaces = {};

function TicTacBoard() {
  Board.call(this);
}

TicTacBoard.prototype = Object.create(Board.prototype);
TicTacBoard.prototype.constructor = TicTacBoard;

TicTacBoard.prototype.spaces = {
    X:[], 
    O:[]
}

TicTacBoard.prototype.winningCombos = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7]
];