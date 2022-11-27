// const twoSum = (nums, target) => {
//   let i = 0;
//   let j = 1;
//   while (j < nums.length) {
//     if (nums[i] + nums[j] === target) {
//       return [i + 1, j + 1];
//     }
//     if (nums[i] + nums[j] < target) {
//       if (j === nums.length - 1) {
//         i++;
//         j = i + 1;
//       } else {
//         j++;
//       }
//     } else {
//       i++;
//       j = i + 1;
//     }
//   }
// };

/**
 * 两数之和 II - 输入有序数组
 * @description 时间复杂度：O(n)。两个指针移动的总次数最多为 n 次。
 * @description 空间复杂度：O(1)。
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left + 1, right + 1];
    } if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};
