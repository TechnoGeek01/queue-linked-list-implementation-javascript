class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return newNode;
  }

  dequeue() {
    if (!this.first) return undefined;

    var currentFirst = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    currentFirst.next = null;

    this.size--;

    return currentFirst.value;
  }
}
