function Ship(length) {
  let hit = 0;
  const getHit = () => hit++;

  const isSunk = () => {
    if (getHit() === length) return true;
    return false;
  };
  return { getHit, length, isSunk };
}

const cruiser = Ship(3);
console.log(cruiser);
