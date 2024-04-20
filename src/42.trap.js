/**
 * 按行求
 */
// const trap = (height) => {
//   let sum = 0;
//   // 获取最大高度，确定循环次数
//   const maxHeight = height.reduce((acc, cur) => Math.max(acc, cur), 0);
//   for (let i = 1; i <= maxHeight; i++) {
//     let tempSum = 0;
//     // 标记是否更新 tempSum
//     let isUpdate = false;
//     for (let j = 0; j < height.length; j++) {
//       if (isUpdate && height[j] < i) {
//         tempSum += 1;
//       }
//       console.log(height[j], i);
//       if (height[j] >= i) {
//         sum += tempSum;
//         tempSum = 0;
//         isUpdate = true;
//       }
//     }
//   }
//   return sum;
// };

// trap([2, 0, 2]);

/**
 * 按列求
 * 题解：https://leetcode.cn/problems/trapping-rain-water/solutions/9112/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/?envType=study-plan-v2&envId=top-interview-150
 */
const trap = (height) => {
  const leftMax = [];
  const rightMax = [];
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i - 1]);
  }
  for (let i = height.length - 2; i > 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i + 1]);
  }
  console.log(leftMax, rightMax);
  for (let i = 1; i < height.length - 1; i++) {
    const tempMin = Math.min(leftMax[i], rightMax[i]);
    if (tempMin > height[i]) {
      sum += tempMin - height[i];
    }
  }
  return sum;
};
