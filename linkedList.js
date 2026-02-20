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
  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  findIndex(value) {}
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value + '->';
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
