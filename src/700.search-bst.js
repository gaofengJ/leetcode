function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 二叉搜索树中的搜索
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(1)。
 * @param {TreeNode} root
 * @param {number} val
 * @returns
 */
const searchBST = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};
