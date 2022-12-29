const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

class Connection {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    this.isConnected = false;
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
  }
}

module.exports = {
  Connection: Connection,
};
