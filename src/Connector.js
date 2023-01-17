// import necessary files
const { Connection } = require("../src/Connection");

class Connector {
  constructor(x, y) {
    this.coordinate = {};
    this.coordinate["x"] = x;
    this.coordinate["y"] = y;
    this.up = new Connection();
    this.down = new Connection();
    this.left = new Connection();
    this.right = new Connection();
  }
}

// exporting connector class
module.exports = {
  Connector: Connector,
};
