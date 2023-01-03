function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 合并二叉树
 * @description 时间复杂度：O(min(m, n))。其中 m 和 n 分别是两个二叉树的节点个数
 * @description 空间复杂度：O(min(m, n))。其中 m 和 n 分别是两个二叉树的节点个数
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @returns
 */
const mergeTrees = (root1, root2) => {
  if (!root1 || !root2) return root1 || root2;
  const root = new TreeNode();
  root.val = (root1.val || 0) + (root2.val || 0);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};
