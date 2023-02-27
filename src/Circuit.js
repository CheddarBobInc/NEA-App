const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Graph } = require("./Graph");

class Circuit {
  constructor() {
    this.circuit = new Graph();
  }

  // select component

  // add component

  // remove component

  // turn on circuit (physics simulation)

  // turn off circuit
}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
