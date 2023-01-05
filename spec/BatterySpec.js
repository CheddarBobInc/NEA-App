// import necessary files
const { Battery } = require("../src/Battery");
const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_BATTERY_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Battery", () => {
  // initialises battery objects before each test
  let battery;

  beforeEach(() => {
    battery = new Battery();
  });

  // tests default values have been set correctly
  it("has a default current of zero", () => {
    expect(battery.current).toEqual(DEFAULT_CURRENT);
  });

  it("has a default resistance of zero", () => {
    expect(battery.resistance).toEqual(DEFAULT_RESISTANCE);
  });

  it("has a default potential difference of zero", () => {
    expect(battery.potentialDifference).toEqual(
      DEFAULT_BATTERY_POTENTIALDIFFERENCE
    );
  });

  it("has two connections", () => {
    expect(battery.positiveConnection).toBeInstanceOf(Connection);
    expect(battery.negativeConnection).toBeInstanceOf(Connection);
  });

  it("has a positive connection with ispositive bool equal to true", () => {
    expect(battery.positiveConnection.isPositive).toEqual(true);
  });

  it("has a negative connection with ispositive bool equal to false", () => {
    expect(battery.negativeConnection.isPositive).toEqual(false);
  });
});
