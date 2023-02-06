const { Node } = require("./Node");
const { LinkedList } = require("./LinkedList");
const { Component } = require("./Component");

class Graph {
    constructor() {
        this.verticies = {};
    }

    // add vertex
    addVertex(vertex) {
        this.verticies[vertex] = new Component(vertex);
    }

    // add edge

    // remove vertex

    // remove edge
}

module.exports = {
    Graph: Graph,
  };