const zigzagLevelOrder = (root) => {
  if (!root) return [];
  const stack = [root];
  const ret = [];
  let reverseFlag = false;
  while (stack.length) {
    const len = stack.length;
    const tempArr = [];
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      tempArr.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    ret.push(!reverseFlag ? tempArr : tempArr.reverse());
    reverseFlag = !reverseFlag;
  }
  return ret;
};
