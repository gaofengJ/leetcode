class WordDictionary {
  constructor() {
    this.arr = [];
  }

  addWord(word) {
    if (!this.arr.includes(word)) {
      this.arr.push(word);
    }
  }

  search(word) {
    if (word.indexOf('.') < 0) {
      return this.arr.includes(word);
    }
    const dotMap = new Map();
    const len = word.length;
    for (let i = 0; i < len; i++) {
      if (word[i] === '.') {
        dotMap.set(i, 1);
      }
    }
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].length !== len) continue;
      let str = this.arr[i];
      for (let j = 0; j < this.arr[i].length; j++) {
        if (dotMap.has(j)) {
          str = `${str.slice(0, j)}.${str.slice(j + 1)}`;
        }
      }
      if (str === word) return true;
    }
    return false;
  }
}
