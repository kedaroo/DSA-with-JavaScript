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
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return true;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) this.last = null;

    const firstNode = this.first;
    this.first = this.first.next;

    this.length--;
    return firstNode.value;
  }

  print() {
    let result = "";
    let pointer = this.first;
    while (pointer) {
      result += pointer.value + " ";
      pointer = pointer.next;
    }
    console.log(result);
  }
}

let q = new Queue();
q.enqueue("Kedar");
q.enqueue("Aryan");
q.enqueue("Ira");
q.print();
console.log(q.dequeue());
q.print();

console.log(q.dequeue());
q.print();
