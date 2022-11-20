function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 二叉树的层序遍历
 * @description 时间复杂度：O(n)。每个点进队出队各一次，故渐进时间复杂度为 O(n)。
 * @description 空间复杂度：O(n)。队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)。
 * @param {TreeNode} root
 * @returns
 */
const levelOrder = (root) => {
  if (!root) return [];
  const stack = [root];
  const ret = [];
  while (stack.length > 0) {
    const tempLevelLen = stack.length;
    ret.push([]);
    for (let i = 1; i <= tempLevelLen; i++) {
      const tempNode = stack.shift();
      ret[ret.length - 1].push(tempNode.val);
      if (tempNode.left) stack.push(tempNode.left);
      if (tempNode.right) stack.push(tempNode.right);
    }
  }
  return ret;
};
