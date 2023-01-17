const { Battery } = require("../src/Battery");
const { Circuit } = require("../src/Circuit");
const { Wire } = require("../src/Wire");
const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
  DEFAULT_BATTERY_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Circuit", () => {
    let circuit;
  
    beforeEach(() => {
      circuit = new Circuit();
    });

    it("has 4 connectors", () => {
        circuit.initialiseCircuit();
        expect(Object.keys(circuit.connectors).length).toEqual(4);
    })
});