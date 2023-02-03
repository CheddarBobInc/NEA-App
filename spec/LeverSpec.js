// import necessary files
const { Lever } = require("../src/Lever");
const { Connection } = require("../src/Connection");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Lever", () => {
  // initialises lever objects before each test
  let lever;

  beforeEach(() => {
    lever = new Lever();
  });

  // tests default values have been set correctly
  it("has a default current of zero", () => {
    expect(lever.current).toEqual(DEFAULT_CURRENT);
  });

  it("has a default resistance of zero", () => {
    expect(lever.resistance).toEqual(DEFAULT_RESISTANCE);
  });

  it("has a default potential difference of zero", () => {
    expect(lever.potentialDifference).toEqual(DEFAULT_POTENTIALDIFFERENCE);
  });

  // it("has two connections", () => {
  //   expect(lever.positiveConnection).toBeInstanceOf(Connection);
  //   expect(lever.negativeConnection).toBeInstanceOf(Connection);
  // });

  // it("has a positive connection with ispositive bool equal to true", () => {
  //   expect(lever.positiveConnection.isPositive).toEqual(true);
  // });

  // it("has a negative connection with ispositive bool equal to false", () => {
  //   expect(lever.negativeConnection.isPositive).toEqual(false);
  // });

  // tests that lever functionality works
  it("has a boolean isOn with default of false", () => {
    expect(lever.isOn).toEqual(false);
  });

  it("has a method onClick which swtiches the lever isOn bool", () => {
    let initialValue = lever.isOn;
    lever.onClick();
    expect(lever.isOn).toEqual(!initialValue);
  });
});
