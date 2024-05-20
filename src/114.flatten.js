import { TreeNode } from './helpers/TreeNode';

const preOrder = (root, list) => {
  list.push(root);
  if (root.left) preOrder(root.left, list);
  if (root.right) preOrder(root.right, list);
};

const flatten = (root) => {
  if (!root) return null;
  const list = [];
  preOrder(root, list);
  for (let i = 1; i < list.length; i++) {
    const pre = list[i - 1];
    const cur = list[i];
    pre.left = null;
    pre.right = cur;
  }
};
