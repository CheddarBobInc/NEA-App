const { Component, DEFAULT_CURRENT } = require('../src/Component');

describe("Component", () => {
  let component;




  beforeEach(() => {
    component = new Component();
  });

  it('has a default current of zero', () => {
    expect(component.current).toEqual(DEFAULT_CURRENT);
  })

  it('the current can be set to specified value', () => {
    component = new Component(20);
    expect(component.current).toEqual(20);
  })


});
