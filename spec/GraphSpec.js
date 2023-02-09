// import necessary files
const { Graph } = require("../src/Graph");
const { LinkedList } = require("../src/LinkedList");
const { Component } = require("../src/Component");
const { Wire } = require("../src/Wire");
const { Battery } = require("../src/Battery");
const { Lever } = require("../src/Lever");

describe("Graph", () => {
  // initialises connection objects before each test
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("has list of verticies", () => {
    expect(graph.verticies).toBeInstanceOf(LinkedList);
  });

  it("has length 0", () => {
    expect(graph.length).toEqual(0);
  });

  it("has method addVertex that adds a vertex to verticies", () => {
    graph.addVertex(new Wire());
    graph.addVertex(new Battery());
    graph.addVertex(new Lever());

    expect(graph.verticies.getAt(0).index).toEqual(0);
    expect(graph.verticies.getAt(0).component).toBeInstanceOf(Wire);
    expect(graph.verticies.getAt(0).listOfConnections).toBeInstanceOf(
      LinkedList
    );

    expect(graph.verticies.getAt(1).index).toEqual(1);
    expect(graph.verticies.getAt(1).component).toBeInstanceOf(Battery);
    expect(graph.verticies.getAt(1).listOfConnections).toBeInstanceOf(
      LinkedList
    );

    expect(graph.verticies.getAt(2).index).toEqual(2);
    expect(graph.verticies.getAt(2).component).toBeInstanceOf(Lever);
    expect(graph.verticies.getAt(2).listOfConnections).toBeInstanceOf(
      LinkedList
    );
  });

  it("has method addEdge that adds edge between two verticies", () => {
    graph.addVertex(new Wire());
    graph.addVertex(new Battery());
    graph.addVertex(new Lever());

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);

    // console.log(graph.verticies.getAt(0));
    // console.log(graph.verticies.getAt(1));
    // expect(graph.verticies.getAt(0).listOfConnections.getAt(0)).toEqual(1);
  });
});
