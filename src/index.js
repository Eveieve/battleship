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

const cruiser = Ship(3);

function Gameboard() {
  const board = () => {
    const array = [];
    const row = 10;
    const col = 10;
    let h = 0;

    for (let i = 0; i < row; i++) {
      array[i] = [];
      for (let j = 0; j < col; j++) {
        array[i][j] = h++;
      }
    }
  };
  return board;
}
