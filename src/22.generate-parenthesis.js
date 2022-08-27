const dfs = (curStr, left, right, res) => {
  if (!left && !right) {
    res.push(curStr);
    return;
  }
  if (left > right) return; // 剪枝
  if (left > 0) {
    dfs(`${curStr}(`, left - 1, right, res);
  }
  if (right > 0) {
    dfs(`${curStr})`, left, right - 1, res);
  }
};

/**
 * @description 括号生成
 * @field 回溯、剪枝
 * @description 时间复杂度：时间复杂度：O(4^n/√n)，在回溯过程中，每个答案需要 O(n)的时间复制到答案数组中
 * @description 空间复杂度：O(n)，除了答案数组之外，我们所需要的空间取决于递归栈的深度，每一层递归函数需要 O(1)的空间，最多递归 2n 层，因此空间复杂度为 O(n)
 * @param {*number} n
 * @returns string[]
 */
const generateParenthesis = (n) => {
  if (!n) return [];
  const res = [];
  dfs('', n, n, res);
  return res;
};
