const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Connection", () => {
  let connection;

  beforeEach(() => {
    connection = new Connection();
  });

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
