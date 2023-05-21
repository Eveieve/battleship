export function Ship(length) {
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

export function Gameboard() {
  const board = () => {
    const col = 10;
    const row = 10;
    const arr = [];

    for (let i = 0; i < row; i++) {
      arr[i] = [];
      for (let j = 0; j < col; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  };
  const arr = board(); // board array, returns the computed arr
  const getArr = () => arr;
  const placeShip = (x, y, length) => {
    if (arr[x][y] === 0) {
      let i = 0;
      while (i < length) {
        arr[x][y - i] = 1; // horizontal
        i++;
        // (later) if rotated(), arr[x-i][y]
      }
    }
    // return arr;
  };
  return { board, placeShip, getArr };
}
