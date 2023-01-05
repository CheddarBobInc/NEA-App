// import necessary files
const { Connection } = require("../src/Connection");

class Connector {
  constructor() {
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
