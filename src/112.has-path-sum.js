function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 路径总和
 * @description 时间复杂度：O(n)。其中 n 是树的节点数。对每个节点访问一次。
 * @description 空间复杂度：O(H)。其中 HHH 是树的高度。空间复杂度主要取决于递归时栈空间的开销，
 * 最坏情况下，树呈现链状，空间复杂度为 O(n)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(log⁡ n)。

 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns
 */
const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;
  return hasPathSum(root.left, targetSum - root.val)
    || hasPathSum(root.right, targetSum - root.val);
};
