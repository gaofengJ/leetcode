const maxProfit = (prices) => {
  const n = prices.length;
  let min = Infinity;
  const f = new Int32Array(n);
  for (let i = 0; i < n; i++) {
    min = Math.min(min, prices[i]);
    f[i] = prices[i] - min;// 最低价买入,prices[i]卖出赚的钱
  }
  let max = 0; let ans = f[n - 1]; let value = 0;
  for (let i = n - 1; i > 0; i--) {
    max = Math.max(max, prices[i]);
    value = Math.max(value, max - prices[i]);// 买入prices[i],最高价卖出赚的钱
    ans = Math.max(ans, value + f[i - 1]);
  }
  return ans;
};
