class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const poppedItem = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedItem.prev = null;
    }
    this.length--;
    return poppedItem;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let pointer;
    if (index <= this.length / 2) {
      pointer = this.head;
      for (let i = 0; i < index; i++) {
        pointer = pointer.next;
      }
    } else {
      pointer = this.tail;
      for (let i = 0; i < this.length - index - 1; i++) {
        pointer = pointer.prev;
      }
    }
    return pointer;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let oldNode = this.get(index);

    oldNode.prev.next = newNode;
    newNode.prev = oldNode.prev;
    newNode.next = oldNode;
    oldNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedItem = this.get(index);

    removedItem.prev.next = removedItem.next;
    removedItem.next.prev = removedItem.prev;

    removedItem.next = null;
    removedItem.prev = null;

    this.length--;
    return removedItem;
  }

  print() {
    let pointer = this.head;
    let result = [];
    while (pointer) {
      result.push(pointer.value);
      pointer = pointer.next;
    }
    console.log(result);
  }
}

let DLL = new DoublyLinkedList();
DLL.push(0);
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
DLL.push(5);
DLL.print();
DLL.remove(4);
DLL.print();
