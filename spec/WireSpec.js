// import necessary files
const { Wire } = require("../src/Wire");
const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Wire", () => {
  // initialises connection objects before each test
  let wire;

  beforeEach(() => {
    wire = new Wire();
  });

  // tests default values have been set correctly
  it("has a default current of zero", () => {
    expect(wire.current).toEqual(DEFAULT_CURRENT);
  });

  it("has a default resistance of zero", () => {
    expect(wire.resistance).toEqual(DEFAULT_RESISTANCE);
  });

  it("has a default potential difference of zero", () => {
    expect(wire.potentialDifference).toEqual(DEFAULT_POTENTIALDIFFERENCE);
  });

  // it("has two connections", () => {
  //   expect(wire.positiveConnection).toBeInstanceOf(Connection);
  //   expect(wire.negativeConnection).toBeInstanceOf(Connection);
  // });

  // it("has a positive connection with ispositive bool equal to true", () => {
  //   expect(wire.positiveConnection.isPositive).toEqual(true);
  // });

  // it("has a negative connection with ispositive bool equal to false", () => {
  //   expect(wire.negativeConnection.isPositive).toEqual(false);
  // });
});
