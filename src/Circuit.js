

class Circuit {
    constructor(connections = [], components = []) {
        this.connections = connections;
        this.components = components;
        this.hasMinimumConnections = this.connections.length > 4 ? true : false;
        this.hasMinimumComponents = this.components.length > 2 ? true : false;
        this.isComplete = this.hasMinimumConnections && this.hasMinimumComponents ? true : false;
    }
}

module.exports = {
    Circuit: Circuit,
  };