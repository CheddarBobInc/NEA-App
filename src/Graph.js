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
  removeVertex(vertex) {
    // loops through each vertex
    for (let i = 0; i < this.length; i++) {
      // removes edges where target vertex is present
      if (
        this.verticies.getAt(i).listOfConnections.search(vertex) != undefined
      ) {
        this.verticies.getAt(i).listOfConnections.remove(vertex);
      }
    }

    // now all edges of target vertex gone now remove vertex from verticies
    this.verticies.remove(this.verticies.getAt(vertex));
  }

  // remove edge
  removeEdge(vertex1, vertex2) {
    // check if edge exists
    if (!this.verticies.getAt(vertex1).listOfConnections.search(vertex2)) {
      return;
    }

    // remove vertex 2 from vertex1 adjacency list
    this.verticies.getAt(vertex1).listOfConnections.remove(vertex2);
  }

  // get vertex
  getVertex(index)

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
