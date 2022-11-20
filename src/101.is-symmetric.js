function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * 判断回文数组
 * @param {number[]} arr
 * @returns
 */
const isPalindrome = (arr) => arr.join('') === arr.reverse().join('');

/**
 * 对称二叉树
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(n)。
 * @param {TreeNode} root
 * @returns
 */
const isSymmetric = (root) => {
  if (!root.left && root.right) return false;
  if (!root.right && root.left) return false;
  const stack = [root];
  const arr = [root.val];
  while (stack.length) {
    if (!isPalindrome(arr)) return false;
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const tempNode = stack.shift();
      arr.shift();
      if (tempNode) {
        stack.push(tempNode.left);
        arr.push(tempNode.left ? tempNode.left.val : '-');
        stack.push(tempNode.right);
        arr.push(tempNode.right ? tempNode.right.val : '-');
      }
    }
  }
  return true;
};
