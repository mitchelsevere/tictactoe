'use strict';

console.log('Let the games begin!');
 
let createBoard = () => {
	// creating our game and player instances
	const playerOne = new Player('Player1', 'X');
	const playerTwo = new Player('Player2', 'O');
	const tictactoe = new TicTacGame(playerOne, playerTwo);

	document.querySelector('#p1').innerText = playerOne.name;
	document.querySelector('#p2').innerText = playerTwo.name;

	return tictactoe; // return the tictactoe prototype to use in the create game function
}

let checkMatches = (spaces, marker, combination) => {
	// for each number in each array in the winningcombinations array, check to see if the num in the array is in the array of the currentplayer
	// if it isn't then return false and break out of the function, if it is then continue looping the length of the array
	// if the length of the array is done and hasn't return false then it must be true and we will return true to the checkwinner function
	for (let num of combination) if (spaces[marker].indexOf(num) === -1) return false; 
	return true;
}

let checkWinner = function(ttt, combinations) {
	const spaces = ttt.board.spaces;
	const marker = ttt.currentPlayer.marker;
	// looping through the winningcombinations array and passing each array to the checkmatches function to see if those three numbers match what's in the currentplayers array
	// If it is then annouce the winner else switch to the next player
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
  // Reseting the board if clicked
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
			if (ttt.marked(grid)) { // if grid-square is true then it must be marked, if so remove the eventlistener click
				grid.removeEventListener('click', function() { console.log('removed') }, true);
			} else {
				const marker = ttt.currentPlayer.marker;
				board.spaces[marker].push(gridSquares.indexOf(grid) + 1); // Push the index of the grid to the players index
				grid.innerText = marker;
				moves.push(board.spaces[marker]); // keeping track of how many moves
				// if the moves equal 9 or a player has won, then call the playagain function
				if (moves.length === 9 || checkWinner(ttt, board.winningCombos)) playAgain(gridSquares, board.spaces['X'], board.spaces['O'], moves); 
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#start').addEventListener('click', createGame);
});