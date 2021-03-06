// Store the data in an array
// Child = 2 * n + 1, 2 * n + 2
// Parent = (n - 1) / 2

// Inserting
// Add from bottom left to right, then bubble up (O (log n))

// Example
// [5, 14, 23, 32, 41, 87, 90, 50, 64, 53]

class MinHeap {
  constructor(arr) {
    this.heap = arr;
    this.buildHeap(this.heap);
  }

  /**
   * Transforms an array into a min-heap
   * @param {Array} arr An array in any order
   * @returns this.heap: a heap
   */
  buildHeap(arr) {
    // Edge case
    if (arr.length === 1 || arr.length === 0) return arr;

    // Calculates the last parent node, and begin heapify
    const { idx: mid } = this.getParent(arr.length - 1);

    // Travels reverse-level-order until the root
    for (let i = mid; i >= 0; i--) {
      this.heapify(arr, i);
    }
  }

  /**
   * Recurrsive function to heapify a single value to its rightful place
   * @param {Array} arr the array to be heapified
   * @param {Number} idx index of the node to be heapified
   */
  heapify(arr, idx) {
    // Compare with two child nodes
    const l = idx * 2 + 1;
    const r = idx * 2 + 2;

    // Find the min between idx, left, and right
    let min = idx;
    if (arr[min] > arr[l]) min = l;
    if (r < arr.length && arr[min] > arr[r]) min = r;

    // Stops when the node is smallest out of the children
    while (arr[idx] > arr[min]) {
      // Swap the two values
      const temp = arr[idx];
      arr[idx] = arr[min];
      arr[min] = temp;

      // Heapify the new, lower index
      this.heapify(arr, min);
    }
  }

  /**
   * Inserts a value at the end of the heap, then bubbles into the right order
   * @param {Number} num Data to be inserted
   */
  insert(num) {
    if (this.heap.includes(num)) {
      console.log("can't insert dups!");
      return null;
    }

    // Start with the new value at the end
    this.heap.push(num);

    // Current size is the location of a new insert
    let curr = this.heap.length - 1;

    // bubble up
    while (num < this.getParent(curr).parent) {
      // Swap values between the current and the parent
      const { idx, parent } = this.getParent(curr);
      this.heap[idx] = num;
      this.heap[curr] = parent;

      // Update new location of the new value
      curr = idx;
    }
  }

  /**
   * Returns the object containing info about the parent of the child
   * Math.floor((idx - 1) / 2)
   * @param {Number} idx Index of the child
   * @returns idx: the index of the parent
   * @returns parent: the value of the parent
   */
  getParent(idx) {
    const parentIdx = Math.floor((idx - 1) / 2);
    const parent = this.heap[parentIdx];
    return {
      idx    : parentIdx,
      parent
    };
  }

  /**
   * Returns the left child and its index of the parent
   * @param {Number} idx index of the parent
   */
  getLeft(idx) {
    const childIdx = 2 * idx + 1;
    const child = this.heap[childIdx];
    return {
      idx   : childIdx,
      child
    };
  }

  /**
   * Returns the right child and its index of the parent
   * @param {Number} idx index of the parent
   */
  getRight(idx) {
    const childIdx = 2 * idx + 2;
    const child = this.heap[childIdx];
    return {
      idx   : childIdx,
      child
    };
  }

  /**
   * Removes and returns the min value of the heap
   * @returns The minumum value of the heap
   */
  removeMin() {
    // If empty
    if (this.heap.length === 0) {
      console.log('Empty heap');
      return null;
    }

    // If only one element
    if (this.heap.length === 1) return this.heap.pop();

    // Swap last element to the top
    const min = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;

    // Heapify from the top
    this.heapify(this.heap, 0);

    return min;
  }
}

// Tests
// const heap = new MinHeap([ 5, 14, 23, 32, 41, 87, 90, 50, 64, 53 ]);
// console.log(heap);

// const test = new MinHeap([ 4 ]);
// console.log(test);

// console.log(test.heap);

const arr = [ 5, 11, 9, 20, 2, 19, 3, 15, 12, 1 ];
console.log(arr);

const heap = new MinHeap(arr);

console.log(heap);

heap.removeMin();

console.log(heap);

heap.insert(0);

console.log(heap);
