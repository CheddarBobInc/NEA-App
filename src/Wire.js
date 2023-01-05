// import necessary files
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("./properties");
const { Connection } = require("../src/Connection");

class Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
    this.positiveConnection = new Connection(true);
    this.negativeConnection = new Connection(false);
  }
}

// exporting wire class
module.exports = {
  Wire: Wire,
};
