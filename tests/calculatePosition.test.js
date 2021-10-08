const { calculatePosition } = require("../app/utils");
const CONSTANTS = require("../app/constants");
const COMPASS = CONSTANTS.COMPASS;

test("calculatePosition should be defined", () => {
  expect(calculatePosition).toBeDefined();
});

test("calculatePosition", () => {
  const currentLocation = { x: 0, y: 0 };
  const currentOrientation = COMPASS.NORTH;
  const boundry = { x: 8, y: 8 };

  const expectedX = 0;
  const expectedY = 1;

  const { x, y } = calculatePosition(
    currentOrientation,
    currentLocation,
    boundry
  );
  expect(expectedX).toBe(x, expectedX);
  expect(expectedY).toBe(y, expectedY);
});

test("calculatePosition", () => {
  const currentLocation = { x: 2, y: 4 };
  const currentOrientation = COMPASS.WEST;
  const boundry = { x: 8, y: 8 };

  const expectedX = 1;
  const expectedY = 4;

  const { x, y } = calculatePosition(
    currentOrientation,
    currentLocation,
    boundry
  );
  expect(expectedX).toBe(x, expectedX);
  expect(expectedY).toBe(y, expectedY);
});
