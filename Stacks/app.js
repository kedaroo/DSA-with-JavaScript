class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.last;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) this.first = null;

    let last = this.last;
    this.last = this.last.next;
    this.size--;

    return last.value;
  }

  print() {
    let pointer = this.last;
    for (let i = this.size - 1; i >= 0; i--) {
      console.log(i, pointer.value);
      pointer = pointer.next;
    }
  }
}

let stack = new Stack();
stack.push("kedar");
stack.push("aryan");
stack.push("ira");
stack.print();

console.log("\n");

console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack);
