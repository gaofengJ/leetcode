function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 翻转二叉树
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(n)。使用的空间由递归栈的深度决定，它等于当前节点在二叉树中的高度。
 * 在平均情况下，二叉树的高度与节点个数为对数关系，即 O(log⁡ n)。而在最坏情况下，树形成链状，空间复杂度为 O(n)。
 * @param {TreeNode} root
 * @returns
 */
const invertTree = (root) => {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
