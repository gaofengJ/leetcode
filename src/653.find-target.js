function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 两数之和IV-输入二叉搜索树
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(n)。
 * @param {TreeNode} root
 * @param {number} k
 * @returns
 */
const findTarget = (root, k) => {
  const stack = [root];
  const map = new Map();
  while (stack.length) {
    const tempNode = stack.shift();
    if (map.get(k - tempNode.val)) return true;
    map.set(tempNode.val, 1);
    if (tempNode.left) stack.push(tempNode.left);
    if (tempNode.right) stack.push(tempNode.right);
  }
  return false;
};
