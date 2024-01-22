/**
 * @description 买卖股票的最佳时机二
 * @field 数组，滑动窗口
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number[]} prices
 * @returns {number} ret
 */
const maxProfit = (prices) => {
  let cur = prices[0];
  let ret = 0;
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price - cur > 0) {
      ret += price - cur;
    }
    cur = price;
  }
  return ret;
};
