class MaxBinaryHeap {
  constructor() {
    this.values = [];
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
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
