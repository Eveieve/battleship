// ship factory
export default function Ship(length) {
  let hit = 0;
  const getHit = () => {
    hit += 1;
  };

  const isSunk = () => {
    if (hit === length) return true;
    return false;
  };
  return { getHit, isSunk };
}

function Gameboard() {
  const board = () => {
    const col = 10;
    const row = 10;
    const arr = [];

    for (let i = 0; i < row; i++) {
      arr[i] = []; // x axis
      for (let j = 0; j < col; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  };

  //   const getBoard = () => board();
  // placeShip
  // gameBoard.placeShip(3) will place the ship to where it's clicked?
  const placeShip = (x, y) => {
    const board = board();
    if (board[x][y] === 0) {
      board[x][y] = 1;
    }
    return { board, placeShip };
  };
  //   const receiveAttack = (coor) => {

  //   }
}
