const { LinkedList } = require("./LinkedList");

class Component {
    constructor(component) {
        this.component = component;
        this.listOfConnections = new LinkedList();
    }
}

module.exports = {
    Component: Component,
  };