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
    // initialising default battery in circuit
    this.components["battery"] = new Battery();
  }
}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
