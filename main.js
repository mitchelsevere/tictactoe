console.log('Let the games begin!');

  const TOP_GRID = document.querySelector('#top');
  const MID_GRID = document.querySelector('#mid');
  const BOT_GRID = document.querySelector('#bot');
  const HEADER = document.querySelector('#header');

//   // Listen For Key Events
  document.addEventListener('click', function game(event) {
    console.log(event.keyCode);
    if (event.keyCode === 39) {
      playerOnePosition += 30;
      playerOne.style.left = `${playerOnePosition}px`;
    } else if (event.keyCode === 40) {
       playerTwoPosition += 30;
       playerTwo.style.left = `${playerTwoPosition}px`;
    }