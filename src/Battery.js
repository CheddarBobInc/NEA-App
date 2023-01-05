// import necessary files
const { Wire } = require("../src/Wire");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_BATTERY_POTENTIALDIFFERENCE,
} = require("./properties");

// battery circuit component inherits from wire component class
class Battery extends Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    // batteries have a different default value for potential difference (emf)
    potentialDifference = DEFAULT_BATTERY_POTENTIALDIFFERENCE
  ) {
    super(current, resistance, potentialDifference);
  }
}

// exporting battery class
module.exports = {
  Battery: Battery,
};
