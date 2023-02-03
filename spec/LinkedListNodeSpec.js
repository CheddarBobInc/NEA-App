// import necessary files
const { LinkedListNode } = require("../src/LinkedListNode");

describe("LinkedListNode", () => {
  // initialises connection objects before each test
  let linkedListNode;

  beforeEach(() => {
    linkedListNode = new LinkedListNode();
  });

  it("has data", () => {
    linkedListNode.data = 0;
    expect(linkedListNode.data).toEqual(0);
  });

  it("has next node pointer", () => {
    expect(linkedListNode.next).toEqual(null);
  });
});
