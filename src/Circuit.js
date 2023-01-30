const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Connection } = require("./Connection");
const { Connector } = require("./Connector");

class Circuit {
  constructor(circuitSize = 2, components = {}) {
    this.circuitSize = circuitSize; // length of side of circuit square (connectors setup in a square)
    this.components = components;
    // this.hasMinimumConnections = this.connections.length > 4 ? true : false;
    // this.hasMinimumComponents = this.components.length > 2 ? true : false;
    this.isComplete = false;
    this.hasMinimumConnections && this.hasMinimumComponents ? true : false;
    this.connectors = {};
  }

  initialiseCircuit(num = this.circuitSize) {
    // creates connectors based on the circuit size
    for (let y = 0; y < num; y++) {
      for (let x = 0; x < num; x++) {
        this.connectors[`connector${x}${y}`] = new Connector(x, y);
      }
    }

    // gives connectors connections there directions
    for (let y = 0; y < num; y++) {
      for (let x = 0; x < num; x++) {
        this.connectors[`connector${x}${y}`].up.direction = 0;
        this.connectors[`connector${x}${y}`].right.direction = 1;
        this.connectors[`connector${x}${y}`].down.direction = 2;
        this.connectors[`connector${x}${y}`].left.direction = 3;
      }
    }

    // initialising default battery in circuit
    this.components["battery"] = new Battery();
  }
}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
