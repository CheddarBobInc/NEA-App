const { LinkedList } = require("./LinkedList");
const { Component } = require("./Component");

class Graph {
  constructor() {
    this.verticies = new LinkedList();
    this.length = 0;
  }

  // add vertex
  addVertex(vertex) {
    // checks index is free to use if not increments index until free
    let freeIndex = true;
    let index = this.length;
    while (!freeIndex) {
      for (let i; i < this.length; i++) {
        if (this.length == this.verticies.getAt(i).index) {
          freeIndex = false;
        }
      }
      index++;
    }
    this.verticies.insertLast(new Component(index, vertex));
    this.length++;
  }

  // add edge
  addEdge(vertex1, vertex2) {
    // check that vertcies exist
    if (!this.verticies.getAt(vertex1)) {
      return;
    }
    if (!this.verticies.getAt(vertex2)) {
      return;
    }

    this.verticies.getAt(vertex1).listOfConnections.insertLast(vertex2);
  }

  // remove vertex

  // remove edge
  removeEdge(vertex1, vertex2) {
    // check if edge exists
    console.log(this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2 - 1));
    console.log("fail")
    if (this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2)) {
      console.log(
        this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2)
      );
      console.log("success");
    }
  }

  // print graph
  print() {
    for (let i = 0; i < this.length; i++) {
      console.log(this.verticies.getAt(i));
    }
  }
}

module.exports = {
  Graph: Graph,
};
