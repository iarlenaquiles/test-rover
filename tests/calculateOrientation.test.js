const { calculateOrientation } = require("../app/utils");
const CONSTANTS = require("../app/constants");
const COMPASS = CONSTANTS.COMPASS;
const DIRECTIONS = CONSTANTS.DIRECTIONS;

test("calculateOrientation should be defined", () => {
  expect(calculateOrientation).toBeDefined();
});

test("calculateOrientation", () => {
  const result = calculateOrientation(COMPASS.NORTH, DIRECTIONS.LEFT);
  const expectedResult = COMPASS.WEST;

  expect(expectedResult).toBe(result, expectedResult);
});

test("calculateOrientation", () => {
  const result = calculateOrientation(COMPASS.EAST, DIRECTIONS.LEFT);
  const expectedResult = COMPASS.NORTH;

  expect(expectedResult).toBe(result, expectedResult);
});

test("calculateOrientation", () => {
  const result = calculateOrientation(COMPASS.SOUTH, DIRECTIONS.RIGHT);
  const expectedResult = COMPASS.WEST;

  expect(expectedResult).toBe(result, expectedResult);
});

test("calculateOrientation", () => {
  const result = calculateOrientation(COMPASS.WEST, DIRECTIONS.RIGHT);
  const expectedResult = COMPASS.NORTH;

  expect(expectedResult).toBe(result, expectedResult);
});
