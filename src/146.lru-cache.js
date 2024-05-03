/* eslint-disable max-classes-per-file */
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return this.map.get(key).value;
  }

  put(key, value) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      if (this.count === this.capacity) {
        this.removeItem();
      }
      const tempNode = new ListNode(key, value);
      this.map.set(key, tempNode);
      this.addToHead(tempNode);
      this.count++;
    }
  }

  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }

  removeFromList(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }

  removeItem() {
    const tail = this.dummyTail.prev;
    this.removeFromList(tail);
    this.map.delete(tail.key);
    this.count--;
  }
}
