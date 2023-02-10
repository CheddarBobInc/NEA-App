const { LinkedList } = require("./LinkedList");
const { Component } = require("./Component");

class Graph {
    constructor() {
        this.verticies = new LinkedList();
        this.length = 0;
    }

    // add vertex
    addVertex(vertex) {
        this.verticies.insertLast(new Component(this.length, vertex));
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
        console.log(this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2));
        if (this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2)) {
            console.log(this.verticies.getAt(vertex1).listOfConnections.getAt(vertex2));
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