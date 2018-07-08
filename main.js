    console.log('Let the games begin!');
    
let startGame = function() {
//     const LANDING = document.querySelector('#landing');
//     const GAME = document.querySelector('#game');
//     const gridSquares = document.querySelectorAll('.grid-square');
//     console.log(gridSquares);

//     LANDING.style.display = 'none';
//     GAME.style.display = 'flex';

    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }

    let playerOne = new Player('test', 'x');
    let playerTwo = new Player('test2', 'o');

    function Game(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.board = new Board();
        this.currentPlayer = playerOne;
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});