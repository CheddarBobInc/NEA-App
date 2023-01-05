// import necessary files
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

class Connection {
  constructor(
    isPositive,
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    this.isConnected = false;
    this.isPositive = isPositive; // represents connections polarity
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
  }
}

// exporting connection class
module.exports = {
  Connection: Connection,
};
