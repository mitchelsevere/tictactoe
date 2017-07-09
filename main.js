    console.log('Let the games begin!');
    
    const LANDING = document.querySelector('#landing');
    const GAME = document.querySelector('#game');
    const HEADER = document.querySelector('#header');
    const GRID_ONE = document.querySelector('#one');
    const GRID_TWO = document.querySelector('#two');
    const GRID_THREE = document.querySelector('#three');
    const GRID_FOUR = document.querySelector('#four');
    const GRID_FIVE = document.querySelector('#five');
    const GRID_SIX = document.querySelector('#six');
    const GRID_SEVEN = document.querySelector('#seven');
    const GRID_EIGHT = document.querySelector('#eight');
    const GRID_NINE = document.querySelector('#nine');

    let turn = 0;
    let playerOne = 'X';
    let playerTwo = 'O';

let startGame = function() {
    const GRID_SQUARE = document.querySelectorAll('.grid-square');

    LANDING.style.display = 'none';
    GAME.style.display = 'block';

    HEADER.innerHTML = `Turn: ${playerOne}`

    // Got the Array.prototype from https://stackoverflow.com/questions/3871547/js-iterating-over-result-of-getelementsbyclassname-using-array-foreach
    // In order to iterate a nodeList (GRID_SQUARE) using map, I first must convert the nodeList to an array.
   Array.prototype.map.call(GRID_SQUARE, function(grid) {
       // Add Listener Event to each GRID_SQUARE
       grid.addEventListener('click', function() {
            if (turn % 2 === 0) {
                this.innerHTML = playerOne;
                HEADER.innerHTML = `Turn: ${playerTwo}`
                turn++;
                win();
            } else {
                this.innerHTML = playerTwo;
                HEADER.innerHTML = `Turn: ${playerOne}`
                turn++;
                win();
            }
       });
   })
}

let checkWinner = function() {
    if (turn % 2 === 0)
        HEADER.innerHTML = `${playerTwo} is the winner!`;
    else {
        HEADER.innerHTML = `${playerOne} is the winner!`;
    }
}

let resetBoard = function() {
    GRID_ONE.innerText = '';
    GRID_TWO.innerText = '';
    GRID_THREE.innerText = '';
    GRID_FOUR.innerText = '';
    GRID_FIVE.innerText = '';
    GRID_SIX.innerText = '';
    GRID_SEVEN.innerText = '';
    GRID_EIGHT.innerText = '';
    GRID_NINE.innerText = '';
    turn = 0;
}

let win = function() {
    // Starting from GRID ONE
    if (GRID_ONE.innerText != '') {
        // Horizontal win from Grid One
       if (GRID_ONE.innerText === GRID_TWO.innerText && GRID_TWO.innerText === GRID_THREE.innerText) {
            checkWinner();
            resetBoard();
        // Vertical win from Grid One
        } else if (GRID_ONE.innerText === GRID_FOUR.innerText && GRID_FOUR.innerText === GRID_SEVEN.innerText) {
            checkWinner();
            resetBoard();
        // Diagonal win from Grid One
        } else if (GRID_ONE.innerText === GRID_FIVE.innerText && GRID_FIVE.innerText === GRID_NINE.innerText) {
            checkWinner();
            resetBoard();
        }
    }

    // Starting from GRID TWO
    if (GRID_TWO.innerText != '') {
        // Vertical win from Grid Two
       if (GRID_TWO.innerText === GRID_FIVE.innerText && GRID_FIVE.innerText === GRID_EIGHT.innerText) {
            checkWinner();
            resetBoard();
        }
    }

    // Starting from GRID THREE
    if (GRID_THREE.innerText != '') {
        // Vertical win from Grid Three
       if (GRID_THREE.innerText === GRID_SIX.innerText && GRID_SIX.innerText === GRID_NINE.innerText) {
            checkWinner();
            resetBoard();
        // Diagonal win from Grid Three
        } else if (GRID_THREE.innerText === GRID_FIVE.innerText && GRID_FIVE.innerText === GRID_SEVEN.innerText) {
            checkWinner();
            resetBoard();
        }
    }

    // Starting from GRID FOUR
    if (GRID_FOUR.innerText != '') {
        // Horizontal win from Grid Four
       if (GRID_FOUR.innerText === GRID_FIVE.innerText && GRID_FIVE.innerText === GRID_SIX.innerText) {
            checkWinner();
            resetBoard();
        }
    }

    // Starting from GRID SIX
    if (GRID_SEVEN.innerText != '') {
        // Horizontal win from Grid Six
       if (GRID_SEVEN.innerText === GRID_EIGHT.innerText && GRID_EIGHT.innerText === GRID_NINE.innerText) {
            checkWinner();
            resetBoard();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#start').addEventListener('click', startGame);
});