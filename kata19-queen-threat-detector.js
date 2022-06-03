const generateBoard = function(whiteQueen, blackQueen) {
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

const queenThreat = function(board) {

  // Find positions of both queens
  let queen1, queen2;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1 && !queen1) {
        queen1 = [i, j];
      } else if (board[i][j] === 1 && !queen2) {
        queen2 = [i, j];
      }
    }
  }

  // Position of queens from each other
  let pos = [queen2[0]-queen1[0], queen2[1]-queen1[1]];

  // Horizontal or vertical threat if either pos is 0
  if (!pos[0] || !pos[1]) {
    return true;
  }

  // Finding diagonal threats
  let x = queen1[0], y = queen1[1];
  let dirX = Math.abs(pos[0]) / pos[0];   // Either +1 or -1 direction
  let dirY = Math.abs(pos[1]) / pos[1];

  for (let i = 0; i < 8; i++) {

    x += dirX;
    y += dirY;

    // Ensure we don't go off the board
    if (x < 0 || x > 7 || y < 0 || y > 7) {
      break;
    }

    if (board[x][y] === 1) {
      return true;
    }

  }

  return false;
}

console.log(queenThreat(generateBoard([0, 5], [5, 0])));

console.log(queenThreat(generateBoard([0, 0], [5, 7])));

console.log(queenThreat(generateBoard([1, 1], [7, 1])));

console.log(queenThreat(generateBoard([2, 0], [2, 3])));

console.log(queenThreat(generateBoard([0, 0], [1, 7])));

console.log(queenThreat(generateBoard([1, 3], [5, 4])));