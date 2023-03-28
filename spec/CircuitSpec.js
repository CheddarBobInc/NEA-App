const { Battery } = require("../src/Battery");
const { Circuit } = require("../src/Circuit");
const { Wire } = require("../src/Wire");
const { Lever } = require("../src/Lever");

describe("Circuit", () => {
  let circuit;

  beforeEach(() => {
    circuit = new Circuit();
  });

  it("has method hasLoop which returns a boolean value on whether there is a cycle or not in the graph", () => {
    // instaniates components in graph
    circuit.graph.addVertex(new Wire());
    circuit.graph.addVertex(new Battery());
    circuit.graph.addVertex(new Lever());

    // adds edges to graph
    circuit.graph.addEdge(0, 1);
    circuit.graph.addEdge(1, 2);

    // loop is present
    expect(circuit.hasLoop()).toEqual(false);

    // circuit.graph.removeEdge(0, 1);

    // circuit.graph.print()
    // // loop is broken
    // expect(circuit.hasLoop()).toEqual(false);
  });
});
