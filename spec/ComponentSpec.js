const { Component } = require("../src/Component");
const {
  DEFAULT_CURRENT,
  DEFAULT_RESISTANCE,
  DEFAULT_POTENTIALDIFFERENCE,
} = require("../src/properties");

describe("Component", () => {
  let component;

  beforeEach(() => {
    component = new Component();
  });

  it("has a default current of zero", () => {
    expect(component.current).toEqual(DEFAULT_CURRENT);
  });

  it("has a default resistance of zero", () => {
    expect(component.resistance).toEqual(DEFAULT_RESISTANCE);
  });

  it("has a default potential difference of zero", () => {
    expect(component.potentialDifference).toEqual(DEFAULT_POTENTIALDIFFERENCE);
  });
});
