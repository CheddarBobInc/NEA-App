const { Node } = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  // insert last node
  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let index = this.head;

      while (index.next) {
        index = index.next;
      }

      index.next = node;
    }

    this.length++;
  }

  // insert at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index >= this.length) {
      return;
    }

    // if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      const node = new Node(data);
      let current, previous;

      // set current to first
      current = this.head;
      let count = 0;

      while (count < index) {
        previous = current; // node before index
        count++;
        current = current.next; // node after index
      }

      node.next = current;
      previous.next = node;
    }

    this.length++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return;
  }

  // remove at index
  removeAt(index) {
    // if index is out of range
    if (index > 0 && index >= this.length) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.length--;
  }

  // remove
  remove(target) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.data === target) {
        this.removeAt(count);
      }
      count++;
      current = current.next;
    }
  }

  // clear list
  clearList() {
    this.head = null;
    this.length = 0;
  }

  // linear search
  search(target) {
    let current = this.head;

    while (current) {
      if (current.data === target) {
        return current.data;
      }

      current = current.next;
    }

    return;
  }

  // print list data
  print() {
    let index = this.head;

    while (index) {
      console.log(index.data);
      index = index.next;
    }
  }
}

module.exports = {
  LinkedList: LinkedList,
};
