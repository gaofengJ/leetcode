function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// const insertIntoBST = (root, val, hasInsert = false) => {
//   if (hasInsert) return;
//   if (!root) return new TreeNode(val);
//   if (!root.left && !root.right) {
//     if (root.val > val) {
//       root.left = new TreeNode(val);
//     } else {
//       root.right = new TreeNode(val);
//     }
//     hasInsert = true;
//   } else if (!root.left && root.val > val) {
//     root.left = new TreeNode(val);
//     hasInsert = true;
//   } else if (!root.right && root.val < val) {
//     root.right = new TreeNode(val);
//     hasInsert = true;
//   }
//   if (root.val > val) {
//     insertIntoBST(root.left, val, hasInsert);
//   } else {
//     insertIntoBST(root.right, val, hasInsert);
//   }
//   return root;
// };

/**
 * 二叉搜索树中的插入操作
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(1)。
 * @param {TreeNode} root
 * @param {number} val
 * @returns
 */
const insertIntoBST = (root, val) => {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
