// import necessary files
const { Connector } = require("../src/Connector");
const { Connection } = require("../src/Connection");

describe("Connector", () => {
  // initialises connection objects before each test
  let connector;

  beforeEach(() => {
    connector = new Connector();
  });

  // tests default values have been set correctly
  it("has four potential connections", () => {
    expect(connector.up).toBeInstanceOf(Connection);
    expect(connector.down).toBeInstanceOf(Connection);
    expect(connector.left).toBeInstanceOf(Connection);
    expect(connector.right).toBeInstanceOf(Connection);
  });
});
