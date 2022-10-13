class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  _swap(idx1, idx2) {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }

  insert(element) {
    this.values.push(element);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];

    while (this.values[index] > this.values[parentIndex]) {
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
      parent = this.values[parentIndex];
    }

    return this.values;
  }

  extract() {
    if (this.values.length > 0) {
      this._swap(0, this.values.length - 1);
      const root = this.values.pop();

      let index = 0;
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild = this.values[leftChildIdx] ?? -Infinity;
      let rightChild = this.values[rightChildIdx] ?? -Infinity;

      let maxChildIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;

      while (this.values[index] < this.values[maxChildIdx]) {
        this._swap(index, maxChildIdx);

        index = maxChildIdx;
        leftChildIdx = 2 * index + 1;
        rightChildIdx = 2 * index + 2;
        leftChild = this.values[leftChildIdx] ?? -Infinity;
        rightChild = this.values[rightChildIdx] ?? -Infinity;
        maxChildIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;
      }

      return root;
    }
  }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(12));
console.log(heap.insert(41));
console.log(heap.insert(33));
console.log(heap.insert(55));
console.log(heap.insert(18));

console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap);
