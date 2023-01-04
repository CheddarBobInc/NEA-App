const { Wire } = require("./Wire");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("./properties");

class Lever extends Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    super(current, resistance, potentialDifference);
    this.isOn = false;
  }
}

module.exports = {
  Lever: Lever,
};
