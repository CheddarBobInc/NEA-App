const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Connection } = require("./Connection");
const { Connector } = require("./Connector");

let components = [];

class Circuit {
  constructor(numOfConnectors = 4, components = []) {
    this.numOfConnectors = numOfConnectors;
    this.components = components;
    // this.hasMinimumConnections = this.connections.length > 4 ? true : false;
    // this.hasMinimumComponents = this.components.length > 2 ? true : false;
    this.isComplete = false;
    this.hasMinimumConnections && this.hasMinimumComponents ? true : false;
    this.connectors = [];
  }

  initialiseCircuit(numOfConnectors) {
    // creates connectors
    for (let i = 0; i < numOfConnectors; i++) {
      connectors[i] = new Connector();
    }

    // gives connectors connections there coordinates
    // for (let i = 0; i < connectors.length; i++) {
    //   connectors[i].up
    // }
  }
}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
