const countNodes = (root, count = 0) => {
  if (!root) return 0;
  count++;
  count += countNodes(root.left);
  count += countNodes(root.right);
  return count;
};
