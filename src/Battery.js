const { Wire } = require("../src/Wire");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_BATTERY_POTENTIALDIFFERENCE,
} = require("./properties");

class Battery extends Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_BATTERY_POTENTIALDIFFERENCE
  ) {
    super(current, resistance, potentialDifference);
  }
}

module.exports = {
  Battery: Battery,
};
