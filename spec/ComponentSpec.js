// import necessary files
const { Component } = require("../src/Component");
const { LinkedList } = require("../src/LinkedList");
const { Wire } = require("../src/Wire");

describe("Component", () => {
  // initialises connection objects before each test
  let component;

  beforeEach(() => {
    component = new Component(0, new Wire());
  });

  it("has component", () => {
    expect(component.index).toEqual(0);
  });

  it("has component", () => {
    expect(component.component).toBeInstanceOf(Wire);
  });

  it("has a linked list", () => {
    expect(component.listOfConnections).toBeInstanceOf(LinkedList);
  });
});
