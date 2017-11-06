'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];
    board.push(row);
    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    }
  }
  return board;
};

//test generatePlayerBoard
//console.log(generatePlayerBoard(4,5));

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    var row = [];
    board.push(row);
    for (var columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    }
  }
  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    //Code in while loop has potential to lay bomb on top of existing bomb
    //This will be fixed when I learn about control flow
    numberOfBombsPlaced++;
  }
  return board;
};

//test generateBombBoard
//console.log(generateBombBoard(3, 4, 5))

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);