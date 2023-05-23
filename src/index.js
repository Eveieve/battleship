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

  const placeHorizontal = (x, y, length) => {
    if (x < 0 || x > 9 || y < 0 || y > 9) return null;
    if (arr[x][y] === 0) {
      let i = 0;
      while (i < length) {
        arr[x][y - i] = 1; // horizontal
        i++;
      }
    }
    return arr;
  };
  const placeVertical = (x, y, length) => {
    if (x < 0 || x > 9 || y < 0 || y > 9) return null;

    if (arr[x][y] === 0) {
      let i = 0;
      while (i < length) {
        arr[x - i][y] = 1;
        i++;
      }
    }
    return arr;
  };

  const receiveAttack = (x, y) => {
    // if attack hit the ship,
    // increment(call) the hit of that ship
    // else if didn't hit,
    // record the coordinate(cell) so it can display it
    if (arr[x][y] === 1) {
      // switch statements?
      // if ship.length === 2
      // patrolBoat.hit();
    }
  };
  return { board, getArr, placeHorizontal, placeVertical };
}
