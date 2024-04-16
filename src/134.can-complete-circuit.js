/**
 * 暴力方法
 */
// const canCompleteCircuit = (gas, cost) => {
//   const len = gas.length;
//   for (let i = 0; i < len; i++) {
//     let j = i;
//     let remain = gas[i];
//     // 当前剩余的油能否到达下一个点
//     while (remain - cost[j] >= 0) {
//       remain = remain - cost[j] + gas[(j + 1) % len];
//       j = (j + 1) % len;
//       // j回到了i
//       if (j === i) {
//         return i;
//       }
//     }
//     // 最远距离绕到了之前，所以 i 后边的都不可能绕一圈了
//     if (j < i) {
//       return -1;
//     }
//     // i 直接跳到 j，外层 for 循环执行 i++，相当于从 j + 1 开始考虑
//     i = j;
//   }
//   return -1;
// };

/**
 * 贪心
 */
const canCompleteCircuit = (gas, cost) => {
  const len = gas.length;
  let start = 0;
  let curSum = 0;
  let totalSum = 0;
  for (let i = 0; i < len; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }
  if (totalSum < 0) return -1;
  return start;
};
