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
