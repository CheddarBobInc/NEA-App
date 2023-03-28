const { Graph } = require("./Graph");

class Circuit {
  constructor() {
    this.graph = new Graph();
    this.x = [];
    this.y = [];
  }

  // select component

  // add component

  // coordinate connection

  // remove component

  // turn on circuit (physics simulation)

  // turn off circuit

  // loop detection
  hasLoop() {
    const visited = new Set();
    const onPath = new Set();

    // parsing vertex == vertexs index not component object
    function depthFirstSearch(vertex, graph) {
      visited.add(vertex);
      onPath.add(vertex);
      graph = graph;

      for (let i = 0; i < graph.length; i++) {
        let neighbour = graph.vertices.getAt(i).index;

        if (onPath.has(neighbour)) {
          // a cycle has been found
          return true;
        }

        if (!(visited.has(neighbour)) && depthFirstSearch(neighbour)) {
          // a cycle has been found
          return true;
        }
      }

      onPath.delete(vertex);
      return false;
    }

    for (let i = 0; i < this.graph.length; i++) {
      let vertex = this.graph.vertices.getAt(i).index;
      if (!(visited.has(vertex)) && depthFirstSearch(vertex, this.graph)) {
        // a cycle has been found
        return true;
      }
    }

    // no cycle has been found
    return false;
  }

}

// exporting circuit class
module.exports = {
  Circuit: Circuit,
};
