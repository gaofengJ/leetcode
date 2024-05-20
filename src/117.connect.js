const connect = (root) => {
  if (!root) return null;
  const stack = [root];
  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i !== len - 1) {
        node.next = stack[0];
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
  return root;
};
