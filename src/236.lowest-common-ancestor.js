const lowestCommonAncestor = (root, p, q) => {
  const parentMap = new Map();
  const nodeArr = [];
  const inOrder = (innerRoot) => {
    if (innerRoot.left) {
      parentMap.set(innerRoot.left.val, innerRoot);
      inOrder(innerRoot.left);
    }
    if (innerRoot.right) {
      parentMap.set(innerRoot.right.val, innerRoot);
      inOrder(innerRoot.right);
    }
  };
  inOrder(root);
  while (p) {
    nodeArr.push(p.val);
    p = parentMap.get(p.val);
  }
  while (q) {
    if (nodeArr.includes(q.val)) {
      return q;
    }
    q = parentMap.get(q.val);
  }
  return null;
};
