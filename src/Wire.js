// import necessary files
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("./properties");

class Wire {
  constructor(
    current = DEFAULT_CURRENT,
    resistance = DEFAULT_RESISTANCE,
    potentialDifference = DEFAULT_POTENTIALDIFFERENCE
  ) {
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
  }
}

// exporting wire class
module.exports = {
  Wire: Wire,
};
