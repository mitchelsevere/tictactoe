console.log('Let the games begin!');
 
let createBoard = function() {
	const playerOne = new Player('Player1', 'X');
	const playerTwo = new Player('Player2', 'O');
	const tictactoe = new TicTacGame(playerOne, playerTwo);

	document.querySelector('#p1').innerText = playerOne.name;
	document.querySelector('#p2').innerText = playerTwo.name;

	return tictactoe;
}

let checkMatch = function(spaces, markers, combination) {
	for (let num of combination) {
		if (spaces[markers].indexOf(num) === -1) return false;
	}
	return true;
}

let checkWinner = function(ttt, combinations) {
	for (let combination of combinations) {
    if (checkMatch(ttt.board.spaces, ttt.currentPlayer.marker, combination)) {
			document.querySelector('#header').innerText = `${ttt.currentPlayer.name} wins!`;
		}
	}
	ttt.switchPlayer();
  return false;
}

let startGame = function() {
	const gridSquares = [].slice.call(document.querySelectorAll('.grid-square')); // converting from nodelist to array
	document.querySelector('#landing').style.display = 'none';
	document.querySelector('#game').style.display = 'flex';
	
	const ttt = createBoard();
	const spaces = ttt.board.spaces;

	for (let grid of gridSquares) {
		grid.addEventListener('click', function() {
			spaces[ttt.currentPlayer.marker].push(gridSquares.indexOf(grid) + 1);
			spaces[ttt.currentPlayer.marker].sort();
			console.log(spaces);
			checkWinner(ttt, ttt.board.winningCombos);
		});
	}
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});