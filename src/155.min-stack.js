class MinStack {
  constructor() {
    this.stack = [];
    this.minMap = new Map();
    this.minMap.set(-1, Number.MAX_VALUE);
  }

  push(val) {
    this.stack.push(val);
    this.minMap.set(this.stack.length - 1, Math.min(this.minMap.get(this.stack.length - 2), val));
  }

  pop() {
    this.minMap.delete(this.stack.length - 1);
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minMap.get(this.stack.length - 1);
  }
}

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
stack.pop();
console.log(stack.getMin());
