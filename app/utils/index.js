const constants = require("./../constants");
const COMPASS = constants.COMPASS;
const DIRECTIONS = constants.DIRECTIONS;

function calculateOrientation(currentOrientation, instruction) {
  const prefix = instruction === DIRECTIONS.LEFT ? -1 : 1;
  const newOrientation = (currentOrientation + prefix + 4) % 4;
  return newOrientation;
}

function calculatePosition(
  currentOrientation,
  { x, y },
  { x: boundaryX, y: boundaryY }
) {
  switch (true) {
    case currentOrientation === COMPASS.NORTH:
      y++;
      break;
    case currentOrientation === COMPASS.EAST:
      x++;
      break;
    case currentOrientation === COMPASS.SOUTH:
      y--;
      break;
    case currentOrientation === COMPASS.WEST:
      x--;
      break;
  }

  if (x > boundaryX || x < 0 || y > boundaryY || y < 0) {
    throw "this position is out of bounds";
  }

  return { x, y };
}

module.exports = {
  calculateOrientation,
  calculatePosition,
};
