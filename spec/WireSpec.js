const { Wire } = require("../src/Wire");

describe("Wire", () => {
  let wire;

  beforeEach(() => {
    wire = new Wire();
  });

  it("has two connector", () => {
    expect(wire).toEqual(jasmine.objectContaining( { conector1: false, connector2 } ));
  });
});
