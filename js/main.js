'use strict';

console.log('Let the games begin!');
 
let createBoard = () => {
	const playerOne = new Player('Player1', 'X');
	const playerTwo = new Player('Player2', 'O');
	const tictactoe = new TicTacGame(playerOne, playerTwo);

	document.querySelector('#p1').innerText = playerOne.name;
	document.querySelector('#p2').innerText = playerTwo.name;

	return tictactoe;
}

let checkMatches = (spaces, marker, combination) => {
	for (let num of combination) if (spaces[marker].indexOf(num) === -1) return false;
	return true;
}

let checkWinner = function(ttt, combinations) {
	const spaces = ttt.board.spaces;
	const marker = ttt.currentPlayer.marker;

	for (let combination of combinations) {
    if (checkMatches(spaces, marker, combination)) {
			let header = document.querySelector('#header');
			header.innerText = `${ttt.currentPlayer.name} wins!`;
			header.classList = 'bounce';
			document.querySelector('#grid').style = 'pointer-events: none';
			return true;
		}
	}
	ttt.switchPlayer();
  return false;
}

let playAgain = (gridSquares, marker1, marker2, moves) => {
	document.querySelector('#grid').style = 'pointer-events: initial';
	
	const again = document.querySelector('#again');
	again.style.display = 'flex';

	again.addEventListener('click', function() {
		document.querySelector('#header').innerText = '';
		// Make sure board is empty when started
		for (let grid of gridSquares) grid.innerText = ''; 
		marker1.length = 0; marker2.length = 0; moves.length = 0;
		createGame();
	});
}

let createGame = () =>  {
	document.querySelector('#landing').style.display = 'none';
	document.querySelector('#again').style.display = 'none';
	document.querySelector('#game').style.display = 'flex';

	const gridSquares = [].slice.call(document.querySelectorAll('.grid-square')); // converting from nodelist to array
	const ttt = createBoard();
	const board = ttt.board;
	const moves = [];

	// Place eventlisteners for clicks
	for (let grid of gridSquares) {
		grid.addEventListener('click', function() {
			if (ttt.marked(grid)) {
				grid.removeEventListener('click', function() { console.log('removed') }, true);
			} else {
				const marker = ttt.currentPlayer.marker;
				board.spaces[marker].push(gridSquares.indexOf(grid) + 1);
				board.spaces[marker].sort();
				grid.innerText = marker;
				moves.push(board.spaces[marker]);
				if (moves.length === 9 || checkWinner(ttt, board.winningCombos)) playAgain(gridSquares, board.spaces['X'], board.spaces['O'], moves);
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#start').addEventListener('click', createGame);
});