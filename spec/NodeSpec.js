// import necessary files
const { Node } = require("../src/Node");

describe("Node", () => {
  // initialises connection objects before each test
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it("has data", () => {
    node.data = 0;
    expect(node.data).toEqual(0);
  });

  it("has next node pointer", () => {
    expect(node.next).toEqual(null);
  });
});
