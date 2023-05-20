import { Ship, Gameboard } from "./index";

describe("patrolBoat factory", () => {
  it("sinks when fully hit", () => {
    const patrolBoat = Ship(2);
    patrolBoat.getHit();
    patrolBoat.getHit();
    expect(patrolBoat.isSunk()).toBeTruthy();
  });
});

describe("Gameboard ", () => {
  it("places ship on the right coordinate", () => {
    const gameboard = Gameboard();
    const board = gameboard.board();
    expect(gameboard.placeShip(3, 4)).toBe(board[3][4] === 1);
  });
});
