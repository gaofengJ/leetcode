/**
 * @description 买卖股票的最佳时机
 * @field 数组，滑动窗口
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number[]} prices
 * @returns {number} ret
 */
const maxProfit = (prices) => {
  let min = prices[0];
  let ret = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    ret = Math.max(ret, prices[i] - min);
  }
  return ret;
};
