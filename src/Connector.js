const { Connection } = require("../src/Connection");

class Connector {
  constructor() {
    this.up = new Connection();
    this.down = new Connection();
    this.left = new Connection();
    this.right = new Connection();
  }
}

module.exports = {
  Connector: Connector,
};
