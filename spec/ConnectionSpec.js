// import necessary files
const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Connection", () => {
  // initialises connection objects before each test
  let connection;

  beforeEach(() => {
    connection = new Connection();
  });

  // tests default values have been set correctly
  it("has a bool is connected", () => {
    expect(connection.isConnected).toEqual(false);
  });

  it("has a default current of zero", () => {
    expect(connection.current).toEqual(DEFAULT_CURRENT);
  });

  it("has a default resistance of zero", () => {
    expect(connection.resistance).toEqual(DEFAULT_RESISTANCE);
  });

  it("has a default potential difference of zero", () => {
    expect(connection.potentialDifference).toEqual(DEFAULT_POTENTIALDIFFERENCE);
  });

  it("has a bool is positive", () => {
    expect(connection.isPositive).toBeUndefined();
  });
});
