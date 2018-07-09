console.log('Let the games begin!');
 
let createBoard = function() {
	const playerOne = new Player('Player1', 'X');
	const playerTwo = new Player('Player2', 'O');
	const tictactoe = new TicTacGame(playerOne, playerTwo);

	document.querySelector('#p1').innerText = playerOne.name;
	document.querySelector('#p2').innerText = playerTwo.name;

	return tictactoe;
}

let checkWinner = function(ttt) {
	if (true) { // Placeholder
		console.log(`Winner is ${ttt.currentPlayer.name}`);
	} else {
		ttt.switchPlayer();
	}
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
			checkWinner(ttt);
		});
	}
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});