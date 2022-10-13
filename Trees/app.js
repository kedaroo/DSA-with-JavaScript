class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let parent = this.root;

    while (true) {
      if (value === parent.value) return undefined;

      if (value < parent.value) {
        if (!parent.left) {
          parent.left = node;
          return this;
        }
        parent = parent.left;
      } else {
        if (!parent.right) {
          parent.right = node;
          return this;
        }
        parent = parent.right;
      }
    }
  }

  find(value) {
    let parent = this.root;
    while (true) {
      if (value === parent.value) return true;
      if (value < parent.value) {
        if (!parent.left) return false;
        parent = parent.left;
      } else {
        if (!parent.right) return false;
        parent = parent.right;
      }
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(6);
BST.insert(15);
BST.insert(3);
BST.insert(8);
BST.insert(20);
// console.log(BST.BFS());
console.log(BST.DFSPreOrder());
console.log(BST.DFSPostOrder());
console.log(BST.DFSInOrder());
// console.log(BST.find(9));
