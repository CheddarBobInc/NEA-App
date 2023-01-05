// import necessary files
const { Wire } = require("./Wire");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("./properties");

// lever (switch) circuit component inherits from wire component class
class Lever extends Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    // uses wire constructor to initialise default physics values
    super(current, resistance, potentialDifference);
    // knows whether the lever is opened or closed true: closed false: open
    this.isOn = false;
  }

  // click on the component from user changes the levers state
  onClick() {
    this.isOn = !this.isOn;
  }
}

// exporting lever class
module.exports = {
  Lever: Lever,
};
