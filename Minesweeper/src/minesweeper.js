const generatePlayerBoard = (numberOfRows, numberOfColumns) =>
  {
    let board = [];
    for (let rows = 0; rows < numberOfRows; rows++)
      {
        let row = [];
        board.push(row);
        for (let columns = 0; columns < numberOfColumns; columns++)
        {
          row.push(' ');
        }

      }
    return board;
  };

//test generatePlayerBoard
//console.log(generatePlayerBoard(4,5));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>
{
  let board = [];
  for (let rows = 0; rows < numberOfRows; rows++)
    {
      let row = [];
      board.push(row);
      for (let columns = 0; columns < numberOfColumns; columns++)
      {
        row.push(null);
      }

    }
  let numberOfBombsPlaced = 0
  while (numberOfBombsPlaced < numberOfBombs)
  {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    //Code in while loop has potential to lay bomb on top of existing bomb
    //This will be fixed when I learn about control flow
    numberOfBombsPlaced++;
  }
  return board;
};

//test generateBombBoard
//console.log(generateBombBoard(3, 4, 5))

const printBoard = (board) =>
{
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5)
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
