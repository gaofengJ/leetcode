const averageOfLevels = (root) => {
  const stack = [root];
  const ret = [];
  while (stack.length) {
    const len = stack.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
      const tempNode = stack.shift();
      total += tempNode.val;
      if (tempNode.left) stack.push(tempNode.left);
      if (tempNode.right) stack.push(tempNode.right);
    }
    ret.push(total / len);
  }
  return ret;
};
