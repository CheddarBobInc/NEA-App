// import necessary files
const { LinkedList } = require("../src/LinkedList");

describe("LinkedList", () => {
  // initialises connection objects before each test
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("has head", () => {
    expect(linkedList.head).toEqual(null);
  });

  it("has length 0", () => {
    expect(linkedList.length).toEqual(0);
  });

  it("has method insertFirst that pushes new nodes onto head", () => {
    linkedList.insertFirst(1);
    expect(linkedList.head.data).toEqual(1);
  });

  it("has method insertLast that adds new nodes to the end of the list", () => {
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    expect(linkedList.head.data).toEqual(1);
    expect(linkedList.getAt(linkedList.length - 1)).toEqual(2);
  });

  it("has method inserAt that inserts data at an index within list", () => {
    // tests that nothing happens if index is out of range
    linkedList.insertAt(1, 10);
    expect(linkedList.head).toEqual(null);

    // initialising list
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(4);

    // tests for inserting at first index
    linkedList.insertAt(0, 0);
    expect(linkedList.head.data).toEqual(0);

    // tests for inserting at specific index
    linkedList.insertAt(3, 3);
    expect(linkedList.getAt(3)).toEqual(3);
  });

  it("has method getAt that returns the data of the node at index", () => {
    // initialising list
    linkedList.insertLast(0);
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);

    // testing for when index out of range
    expect(linkedList.getAt(10)).toEqual(null);

    expect(linkedList.getAt(2)).toEqual(2);
  });

  it("has method removeAt that removes nodes at index", () => {
    // initialising list
    for (let i = 0; i < 10; i++) {
      linkedList.insertLast(i);
    }

    // tests when index out of range
    linkedList.removeAt(20);
    expect(linkedList.length).toEqual(10);

    // tests when removing head
    expect(linkedList.head.data).toEqual(0);
    linkedList.removeAt(0);
    expect(linkedList.head.data).toEqual(1);

    // tests when removing at index
    expect(linkedList.getAt(5)).toEqual(6);
    linkedList.removeAt(5);
    expect(linkedList.getAt(5)).toEqual(7);
  });

  it("has method clearList that clears the list", () => {
    // initialising list
    for (let i = 0; i < 10; i++) {
      linkedList.insertLast(i);
    }

    for (let i = 0; i < 10; i++) {
      expect(linkedList.getAt(i)).toEqual(i);
    }

    linkedList.clearList();

    expect(linkedList.head).toEqual(null);
    expect(linkedList.length).toEqual(0);
  });

  it("has length property that works properly", () => {
    expect(linkedList.length).toEqual(0);
    linkedList.insertFirst(0);
    expect(linkedList.length).toEqual(1);
    linkedList.insertLast(1);
    expect(linkedList.length).toEqual(2);
    linkedList.insertAt(3, 0);
    expect(linkedList.length).toEqual(3);
    linkedList.removeAt(0);
    expect(linkedList.length).toEqual(2);
  });
});
