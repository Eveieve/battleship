import Ship from "./index";

describe("ship factory", () => {
  it("sinks when fully hit", () => {
    const ship = Ship(1);
    ship.getHit();
    // ship.getHit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
