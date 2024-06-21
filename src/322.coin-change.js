/**
 * 题解：https://leetcode.cn/problems/coin-change/solutions/86861/js-xiang-jie-dong-tai-gui-hua-de-si-xiang-yi-bu-da
 * 状态方程：dp[i] = Math.min(dp[i - coin] + 1, dp[i -coin] + 1, ...)
 */
const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
