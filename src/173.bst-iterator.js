import { TreeNode } from './helpers/TreeNode';

class BSTIterator {
  constructor(root) {
    this.arr = [];
    this.inOrder(root);
    this.index = -1;
  }

  inOrder(root) {
    if (root.left) {
      this.inOrder(root.left);
    }
    this.arr.push(root.val);
    if (root.right) {
      this.inOrder(root.right);
    }
  }

  hasNext() {
    if (this.arr[this.index + 1] !== undefined) return true;
    return false;
  }

  next() {
    this.index++;
    return this.arr[this.index];
  }
}
