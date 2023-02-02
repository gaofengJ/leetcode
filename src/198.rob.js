// 1、假设f(n+1)位置为num
// 如果偷第n家，f(n + 1) = f(n)
// 如果不偷第n家，f(n + 1) = = f(n - 1) + num
// f(n + 1) = Math.max(f(n), f(n - 1) + num)
/**
 *  打家劫舍
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 */
const rob = (nums) => {
  const dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i < nums.length + 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[dp.length - 1];
};
