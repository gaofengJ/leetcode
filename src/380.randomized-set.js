class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const index = this.map.get(val);
    this.arr[index] = this.arr[this.arr.length - 1];
    this.map.set(this.arr[index], index);
    this.map.delete(val);
    this.arr.pop();
    return true;
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
  }
}
