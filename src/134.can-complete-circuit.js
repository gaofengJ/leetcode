const canCompleteCircuit = (gas, cost) => {
  const len = gas.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    let remain = gas[i];
    // 当前剩余的油能否到达下一个点
    while (remain - cost[j] >= 0) {
      remain = remain - cost[j] + gas[(j + 1) % len];
      j = (j + 1) % len;
      // j回到了i
      if (j === i) {
        return i;
      }
    }
    // 最远距离绕到了之前，所以 i 后边的都不可能绕一圈了
    if (j < i) {
      return -1;
    }
    // i 直接跳到 j，外层 for 循环执行 i++，相当于从 j + 1 开始考虑
    i = j;
  }
  return -1;
};
