function TreeNode(val, left, right, next) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
  this.next = next === undefined ? null : next;
}

/**
 * 填充每个节点的下一个右侧节点指针
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(n)
 * @param {TreeNode} root
 * @returns
 */
const connect = (root) => {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i < len - 1) {
        node.next = stack[0];
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return root;
};
