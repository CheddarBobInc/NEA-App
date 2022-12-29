const { Connector } = require("../src/Connector");
const { Connection } = require("../src/Connection");

describe("Connector", () => {
  let connector;

  beforeEach(() => {
    connector = new Connector();
  });

  it("has four potential connections", () => {
    expect(connector.up).toBeInstanceOf(Connection);
    expect(connector.down).toBeInstanceOf(Connection);
    expect(connector.left).toBeInstanceOf(Connection);
    expect(connector.right).toBeInstanceOf(Connection);
  });
});
