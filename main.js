console.log('Let the games begin!');

  const TOP_GRID = document.querySelector('#top');
  const MID_GRID = document.querySelector('#mid');
  const BOT_GRID = document.querySelector('#bot');
  const HEADER = document.querySelector('#header');

//   // Listen For Key Events
//   document.addEventListener('click', function game(event) {
//     console.log(event.keyCode);
//     if (event.keyCode === 39) {
//       playerOnePosition += 30;
//       playerOne.style.left = `${playerOnePosition}px`;
//     } else if (event.keyCode === 40) {
//        playerTwoPosition += 30;
//        playerTwo.style.left = `${playerTwoPosition}px`;
//     }

function startGame() {
    const LANDING = document.querySelector('#landing');
    const GAME = document.querySelector('#game');
    
    LANDING.style.display = 'none';
    GAME.style.display = 'block';

    let GRID_SQUARE = document.querySelectorAll('.grid-square');
    for (let i = 0; i < GRID_SQUARE.length; i++) {
        GRID_SQUARE[i].addEventListener('click', function() {
            this.innerHTML = 'X';
        });
    }

}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});