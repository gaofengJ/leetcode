/**
 * @description 两个 for 循环暴力枚举
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
// const twoSum = (nums, target) => {
//   const len = nums.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

/**
 * @description 通过 map 降低时间复杂度
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
  const tempObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.prototype.hasOwnProperty.call(tempObj, [target - nums[i]])) {
      return [tempObj[target - nums[i]], i];
    }
    tempObj[nums[i]] = i;
  }
};

const ret1 = twoSum([2, 7, 11, 15], 9);
console.log(ret1);
const ret2 = twoSum([3, 2, 4], 6);
console.log(ret2);
const ret3 = twoSum([3, 3], 6);
console.log(ret3);
