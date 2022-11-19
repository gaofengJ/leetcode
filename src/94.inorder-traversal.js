function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 二叉树的中序遍历
 * @description 时间复杂度：O(n)。其中 n 是二叉树的节点数。每一个节点恰好被遍历一次。
 * @description 空间复杂度：O(n)。为递归过程中栈的开销，平均情况下为 O(log⁡n)，最坏情况下树呈现链状，为 O(n)。
 * @param {TreeNode} root
 */
const inorderTraversal = (root, res = []) => {
  if (!root) return res;
  inorderTraversal(root.left, res);
  res.push(root.val);
  inorderTraversal(root.right, res);
  return res;
};
