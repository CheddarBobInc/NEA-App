const { Wire } = require("./Wire");
const { Lever } = require("./Lever");
const { Battery } = require("./Battery");
const { Graph } = require("./Graph");
const { Component } = require("./Component");

class Circuit {
  constructor() {
    circuit = new Graph();
    x = [];
    y = [];
  }

  // select component

  // add component

  // coordinate connection

  // remove component

  // turn on circuit (physics simulation)

  // turn off circuit

  // loop detection
  isLoop() {
    const visited = new Set();
    const onPath = new Set();
  }

}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
