const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Connection } = require("./Connection");
const { Connector } = require("./Connector");

class Circuit {
  constructor() {
    this.components = 0;
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
