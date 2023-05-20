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

    for (let i = 0; i < col; i++) {
      arr[i] = [];
      for (let j = 0; j < row; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  };

  return { board };
}
