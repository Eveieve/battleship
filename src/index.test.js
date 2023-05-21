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
  let gameboard;

  beforeEach(() => {
    // run this before each test in this suite
    gameboard = Gameboard();
  });

  it("places ship on the right coordinate", () => {
    gameboard.placeShip(3, 4, 2); // horizontally
    const board = gameboard.getArr();
    expect(board[3][4]).toBeTruthy();
    expect(board[3][3]).toBeTruthy();
  });
});
