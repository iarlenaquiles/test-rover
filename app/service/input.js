const CONSTANTS = require("../constants");

function isInitialPosition(input) {
  const data = input.split(" ");
  const [x, y, orientation] = data;

  if (orientation in CONSTANTS.COMPASS_ABBREVIATION === false) {
    throw "Invalid orientation";
  }

  const position = {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
  };
  return [position, orientation];
}

function isInstructions(input) {
  const instructionArr = input.split("");

  instructionArr.forEach((instruction) => {
    if (instruction in CONSTANTS.DIRECTIONS_ABBREVIATION === false) {
      throw "instruction not recorgnized";
    }
  });
  return instructionArr;
}

function isMap(input) {
  const data = input.trim().split(" ");
  const [x, y] = data;
  const mapData = {
    x: parseInt(x, 10),
    y: parseInt(y, 10),
  };
  return mapData;
}

function processCommand(inputStr) {
  const instructionsArr = [];
  const data = inputStr.trim().split("\n");

  const mapData = isMap(data.shift());

  while (data.length > 0) {
    const cleanInitialPositionData = data.shift().trim();
    const [initialPosition, initialOrientation] = isInitialPosition(
      cleanInitialPositionData
    );

    const cleanInstructionInput = data.shift().trim();
    const instructions = isInstructions(cleanInstructionInput);

    instructionsArr.push({
      mapData,
      initialPosition,
      initialOrientation,
      instructions,
    });
  }
  return instructionsArr;
}

module.exports = {
  isInitialPosition,
  isInstructions,
  isMap,
  processCommand,
};
