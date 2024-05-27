const kthSmallest = (root, k) => {
  let ret;
  const inOrder = (innerRoot) => {
    if (innerRoot.left) inOrder(innerRoot.left);
    if (k === 1) ret = innerRoot.val;
    if (k < 1) return;
    k -= 1;
    if (innerRoot.right) inOrder(innerRoot.right);
  };
  inOrder(root);
  return ret;
};
