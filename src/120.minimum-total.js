// 1、定义子问题
// 2、写出子问题的推导关系
// f(i, j) = Math.min(f(i + 1, j), f(i + 1, j + 1)) + triangle[i, j]
// 3、确定DP数组的计算顺序
// 4、空间优化（可选）

/**
 * 三角形最小路径和
 * 时间复杂度：O(n²)
 * 空间复杂度：O(n²)
 * @param {number[]} triangle
 * @returns
 */
const minimumTotal = (triangle) => {
  const len = triangle.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(triangle[i].length);
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (i === len - 1) {
        dp[i][j] = triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};
