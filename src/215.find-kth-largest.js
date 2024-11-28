/**
 * 小根堆
 * 题解：https://github.com/sisterAn/JavaScript-Algorithms/issues/60
 * 升序：大根堆；降序：小根堆
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 交换两个元素的位置
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // 向堆中添加一个元素
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  // 移除并返回堆顶元素
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return root;
  }

  // 获取堆顶元素但不移除
  peek() {
    return this.heap[0];
  }

  // 向上调整堆，维护最小堆性质
  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.bubbleUp(parentIndex);
    }
  }

  // 向下调整堆，维护最小堆性质
  bubbleDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let smallestIndex = index;
    if (this.heap[leftChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftChildIndex;
    }
    if (this.heap[rightChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightChildIndex;
    }
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }
}

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap(); // 创建一个最小堆，创建堆的方式有原地建堆和插入式建堆，这里是插入式建堆
  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]); // 将当前元素加到堆中
    if (minHeap.heap.length > k) { // 如果堆的大小超过了k，弹出堆顶元素
      minHeap.pop(); // 堆顶是最小的元素，这样确保堆中保留的是最大的第k个元素
    }
  }
  return minHeap.peek(); // 最后堆顶元素就是数组中的第k大元素
};
