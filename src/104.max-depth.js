function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 二叉树的最大深度
 * @description 时间复杂度：O(n)。其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
 * @description 空间复杂度：O(height）。其中 height 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
 * @param {TreeNode} root
 * @param {number} deep
 * @returns
 */
const maxDepth = (root, deep = 0) => {
  if (!root) return 0;
  deep += 1;
  return Math.max(maxDepth(root.left) + deep, maxDepth(root.right) + deep);
};
