const fs = require("fs");
const Rover = require("./entities/rover");
const inputCommands = require("./service/input");

function app() {
  const fileContent = fs.readFileSync("./app/database/input.txt", "utf8");
  const roverCommands = inputCommands.processCommand(fileContent);

  roverCommands.forEach(function (row) {
    const rover = new Rover();

    rover.position = row.initialPosition;
    rover.orientationStr = row.initialOrientation;
    rover.instructions = row.instructions;
    rover.map = row.mapData;
    rover.executeInstructions();

    console.log(`${rover.formattedPosition()}`);
  });
}

app();

module.exports = { app };
