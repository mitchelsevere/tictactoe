console.log('Let the games begin!');

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
    const HEADER = document.querySelector('#header');
    
    LANDING.style.display = 'none';
    GAME.style.display = 'block';

    const GRID_SQUARE = document.querySelectorAll('.grid-square');
    let counter = 0;
    let playerOne = 'X';
    let playerTwo = 'O';


    for (let i = 0; i < GRID_SQUARE.length; i++) {
        GRID_SQUARE[i].addEventListener('click', function() {
            if (counter % 2 === 0) {
                this.innerHTML = playerOne;
                counter++;
                console.log(counter);
            } else {
                this.innerHTML = playerTwo;
                counter++;
                console.log(counter);
            }
        });
    }

}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});