'use strict';

console.log('Let the games begin!');
 
let createBoard = function() {
	const playerOne = new Player('Player1', 'X');
	const playerTwo = new Player('Player2', 'O');
	const tictactoe = new TicTacGame(playerOne, playerTwo);

	document.querySelector('#p1').innerText = playerOne.name;
	document.querySelector('#p2').innerText = playerTwo.name;

	return tictactoe;
}

let checkMatches = function(spaces, marker, combination) {
	for (let num of combination) {
		if (spaces[marker].indexOf(num) === -1) return false;
	}
	return true;
}

let checkWinner = function(ttt, combinations) {
	const spaces = ttt.board.spaces;
	const marker = ttt.currentPlayer.marker;

	for (let combination of combinations) {
    if (checkMatches(spaces, marker, combination)) {
			document.querySelector('#header').innerText = `${ttt.currentPlayer.name} wins!`;
			return true;
		}
	}
	ttt.switchPlayer();
	console.log('switching players', ttt.currentPlayer);
  return false;
}

let placeMarker = function(gridSquares) {
	const ttt = createBoard();
	const spaces = ttt.board.spaces;

	for (let grid of gridSquares) {
		grid.addEventListener('click', function() {
			if (ttt.marked(grid)) {
				grid.removeEventListener('click', function() { console.log('removed') }, true);
			} else {
				const marker = ttt.currentPlayer.marker;
				spaces[marker].push(gridSquares.indexOf(grid) + 1);
				spaces[marker].sort();
				grid.innerText = marker;
				checkWinner(ttt, ttt.board.winningCombos);
			}
		});
	}
}

let startGame = function() {
	const gridSquares = [].slice.call(document.querySelectorAll('.grid-square')); // converting from nodelist to array
	document.querySelector('#landing').style.display = 'none';
	document.querySelector('#game').style.display = 'flex';

	placeMarker(gridSquares);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});