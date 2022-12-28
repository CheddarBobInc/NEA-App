const DEFAULT_CURRENT = 0;

class Component {
  constructor(current = DEFAULT_CURRENT, resistance, potentialDifference) {
    this.current = current;
    this.resistance = resistance;
    this.potentialDifference = potentialDifference;
  }
}

module.exports = {
  Component: Component,
  DEFAULT_CURRENT,
};
