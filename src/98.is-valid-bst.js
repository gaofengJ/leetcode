function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// const inorderTraversal = (root, res = []) => {
//   if (!root) return res;
//   inorderTraversal(root.left, res);
//   res.push(root.val);
//   inorderTraversal(root.right, res);
//   return res;
// };

// const isValidBST = (root) => {
//   const ret = inorderTraversal(root);
//   for (let i = 0; i < ret.length - 1; i++) {
//     const target = ret[i];
//     const next = ret[i + 1];
//     if (target >= next) return false;
//   }
//   return true;
// };

/**
 * 验证搜索二叉树
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(n)。
 * @param {TreeNode} root
 * @param {boolean} bool
 * @returns
 */
const isValidBST = (root, bool = true, stack = []) => {
  if (!root) return true;
  if (!bool) return false;
  if (root.left) {
    bool = isValidBST(root.left, bool, stack);
    if (!bool) return bool;
  }
  if (stack[stack.length - 1] >= root.val) {
    bool = false;
    return bool;
  }
  stack.push(root.val);
  if (root.right) {
    bool = isValidBST(root.right, bool, stack);
    if (!bool) return bool;
  }
  return bool;
};
