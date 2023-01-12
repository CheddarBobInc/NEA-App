const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Connection } = require("./Connection");
const { Connector } = require("./Connector");

let connections = [];
let components = [];
let wire = new Wire();
wire.positiveConnection.coordinate = 00;
let connector = new Connector();
connector.up.coordinate = 00;

class Circuit {
  constructor(connections = [], components = []) {
    this.connections = connections;
    this.components = components;
    this.hasMinimumConnections = this.connections.length > 4 ? true : false;
    this.hasMinimumComponents = this.components.length > 2 ? true : false;
    this.isComplete =
      this.hasMinimumConnections && this.hasMinimumComponents ? true : false;
  }
}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
