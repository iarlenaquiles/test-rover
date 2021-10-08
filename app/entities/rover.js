const { calculateOrientation, calculatePosition } = require("../utils");
const constants = require("../constants");
const COMPASS = constants.COMPASS;
const DIRECTIONS = constants.DIRECTIONS;
const COMPASS_ABBREVIATION = constants.COMPASS_ABBREVIATION;

class Rover {
  constructor() {
    this._position = { x: 0, y: 0 };
    this._orientation = COMPASS.NORTH;
    this._map = { x: 8, y: 8 };
    this._instructions = [];
  }

  get instructions() {
    return this._instructions;
  }

  set instructions(instructions) {
    this._instructions = instructions;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation) {
    this._orientation = orientation;
  }

  get orientationStr() {
    return Object.keys(COMPASS_ABBREVIATION).find(
      (o) => COMPASS_ABBREVIATION[o] === this.orientation
    );
  }

  set orientationStr(orientationStr) {
    if (orientationStr in Object.keys(COMPASS_ABBREVIATION)) {
      console.log("error", orientationStr, ":::");
      throw "orientation not known";
    }

    this.orientation = COMPASS_ABBREVIATION[orientationStr];
  }

  get position() {
    return this._position;
  }

  set position(position) {
    this._position = position;
  }

  get map() {
    return this._map;
  }

  set map(map) {
    this._map = map;
  }

  formattedPosition() {
    return `${this.position.x} ${this.position.y} ${this.orientationStr}`;
  }

  executeInstructions() {
    this.instructions.forEach((instruction) => {
      if (instruction == DIRECTIONS.LEFT || instruction === DIRECTIONS.RIGHT) {
        const newOrientation = calculateOrientation(
          this.orientation,
          instruction
        );
        this.orientation = newOrientation;
        return;
      }

      const newPosition = calculatePosition(
        this.orientation,
        this.position,
        this.map
      );
      this.position = newPosition;
    });
  }
}

module.exports = Rover;
