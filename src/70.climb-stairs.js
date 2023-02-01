/**
 * 爬楼梯
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number} n
 * @returns
 */
const climbStairs = (n) => {
  if (n === 1 || n === 1) return 1;
  let p = 1;
  let q = 1;
  let temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = p;
    p = q;
    q = temp + q;
  }
  return q;
};
