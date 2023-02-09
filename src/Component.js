const { LinkedList } = require("./LinkedList");

class Component {
    constructor(index, component) {
        this.index = index;
        this.component = component;
        this.listOfConnections = new LinkedList();
    }
}

module.exports = {
    Component: Component,
  };