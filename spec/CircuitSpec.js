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

    it("must have at least two connections", () => {
        expect(circuit.isComplete).toEqual(false);
        circuit = new Circuit([0, 1, 3]);
        expect(circuit.isComplete).toEqual(true);
    })
});