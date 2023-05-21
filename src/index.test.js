import { Ship, Gameboard } from "./index";

describe("patrolBoat factory", () => {
  test("sink when fully hit", () => {
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

  test("place ship horizontally", () => {
    gameboard.placeHorizontal(3, 4, 2); // horizontally
    const board = gameboard.getArr();
    expect(board[3][4]).toBeTruthy();
    expect(board[3][3]).toBeTruthy();
  });
  test("place ship vertically", () => {
    gameboard.placeVertical(3, 4, 2);
    const board = gameboard.getArr();
    expect(board[3][4]).toBeTruthy();
    expect(board[2][4]).toBeTruthy();
  });
  test.only("ignore placing outside the board", () => {
    expect(gameboard.placeHorizontal(10, 10, 2)).toBeNull();
  });
});
