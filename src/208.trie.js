class Trie {
  constructor() {
    this.tree = {};
  }

  insert(word) {
    let temp = this.tree;
    for (let i = 0; i < word.length; i++) {
      if (!temp[word[i]]) {
        temp[word[i]] = {};
      }
      temp = temp[word[i]];
    }
    temp.isEnd = true;
  }

  search(word) {
    let temp = this.tree;
    for (let i = 0; i < word.length; i++) {
      if (!temp[word[i]]) return false;
      temp = temp[word[i]];
    }
    if (temp.isEnd) return true;
    return false;
  }

  startsWith(prefix) {
    let temp = this.tree;
    for (let i = 0; i < prefix.length; i++) {
      if (!temp[prefix[i]]) return false;
      temp = temp[prefix[i]];
    }
    return true;
  }
}

const trie = new Trie();
console.log(trie.insert('apple'));
console.log(trie.search('apple')); // 返回 True
console.log(trie.search('app')); // 返回 False
console.log(trie.startsWith('app')); // 返回 True
console.log(trie.insert('app'));
console.log(trie.search('app')); // 返回 True
