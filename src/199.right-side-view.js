const rightSideView = (root) => {
  if (!root) return [];
  const stack = [root];
  const ret = [];
  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i === len - 1) ret.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
  return ret;
};
