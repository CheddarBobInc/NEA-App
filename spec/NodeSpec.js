// import necessary files
const { Node } = require("../src/Node");

describe("Node", () => {
  // initialises connection objects before each test
  let linkedListNode;

  beforeEach(() => {
    linkedListNode = new Node();
  });

  it("has data", () => {
    linkedListNode.data = 0;
    expect(linkedListNode.data).toEqual(0);
  });

  it("has next node pointer", () => {
    expect(linkedListNode.next).toEqual(null);
  });
});
