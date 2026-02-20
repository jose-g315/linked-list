export default class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let size = 0;
    let current = this.head;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }
  headNode() {
    if (!this.head) {
      return undefined;
    } else {
      return this.head;
    }
  }
  tailNode() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    let current = this.head;
    let counter = 0;
    while (current && counter < index) {
      current = current.next;
      counter += 1;
    }
    return current || null;
  }
  popHead() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let nextNode = current.next;
    this.head = nextNode;
    return current;
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  }
  insertAt(index, ...values) {
    if (index < 0) throw RangeError;
    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }
    let current = this.head;
    let counter = 0;
    while (current && counter < index - 1) {
      current = current.next;
      counter += 1;
    }
    if (!current) throw RangeError;

    let after = current.next;
    for (let value of values) {
      const newNode = new Node(value);
      current.next = newNode;
      current = newNode;
    }
    current.next = after;
  }
  removeAt(index) {
    if (index < 0) throw RangeError;
    if (index === 0) {
      if (!this.head) throw RangeError;
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let counter = 0;
    while (current && counter < index - 1) {
      current = current.next;
      counter += 1;
    }
    if (!current || !current.next) throw RangeError;
    current.next = current.next.next;
  }
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }
    console.log(result + 'null');
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
