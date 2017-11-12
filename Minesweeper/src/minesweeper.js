class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = (numberOfRows * numberOfColumns);
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
      if (playerBoard[rowIndex][columnIndex] !== ' ') {
          console.log("This tile has already been flipped!");
          return;
      } else if (bombBoard[rowIndex][columnIndex] === 'B') {
          playerBoard[rowIndex][columnIndex] = 'B';
      } else {
          playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
        }
  }
}

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        let row = [];
        board.push(row);
        for (let columns = 0; columns < numberOfColumns; columns++) {
          row.push(' ');
        }

    }
    return board;
};

//test generatePlayerBoard
//console.log(generatePlayerBoard(4,5));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
      let row = [];
      board.push(row);
      for (let columns = 0; columns < numberOfColumns; columns++) {
        row.push(null);
      }

  }
  let numberOfBombsPlaced = 0
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }
  }
  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0
  neighborOffsets.forEach(offSet => {
    const neighborRowIndex = rowIndex + offSet[0];
    const neighborColumnIndex = columnIndex + offSet[1];
    if (neighborRowIndex >= 0 & neighborRowIndex < numberOfRows & neighborColumnIndex >= 0 & neighborColumnIndex < numberOfColumns) {
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
    }
  });
  return numberOfBombs;
};

//test generateBombBoard
//console.log(generateBombBoard(3, 4, 5))

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

console.log('Updated Player Board:');
flipTile(playerBoard, bombBoard, 2, 0);
printBoard(playerBoard);
