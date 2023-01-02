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
    this.isPositive = isPositive;
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
  }
}

module.exports = {
  Connection: Connection,
};
