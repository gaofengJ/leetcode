/**
 * 用队列实现栈
 */
class MyQueue {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  pop(item) {
    return this.list.shift(item);
  }

  peek() {
    return this.list[0];
  }

  empty() {
    return this.list.length === 0;
  }
}
