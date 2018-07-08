    console.log('Let the games begin!');
    
let startGame = function() {
    const gridSquares = document.querySelectorAll('.grid-square');
    document.querySelector('#landing').style.display = 'none';
    document.querySelector('#game').style.display = 'flex';

    const playerOne = new Player('Player1', 'x');
    const playerTwo = new Player('Player2', 'o');
		const game = new TicTacGame(playerOne, playerTwo);
		
    document.querySelector('#p1').innerText = playerOne.name;
    document.querySelector('#p2').innerText = playerTwo.name;

    console.log(playerOne.name);
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});