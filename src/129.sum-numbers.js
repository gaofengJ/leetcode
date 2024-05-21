const sumNumbers = (root) => {
  const arr = [];
  const preOrder = (innerRoot, curNum = '') => {
    curNum = `${curNum}${innerRoot.val}`;
    if (innerRoot.left) {
      curNum = `${curNum}${preOrder(innerRoot.left, curNum)}`;
    }
    if (innerRoot.right) {
      curNum = `${curNum}${preOrder(innerRoot.right, curNum)}`;
    }
    if (!innerRoot.left && !innerRoot.right) {
      arr.push(curNum);
      curNum = '';
      return curNum;
    }
    return '';
  };
  preOrder(root);
  return arr.reduce((pre, accr) => +pre + +accr, 0);
};
