/**
 * @description 最大子数组和
 * @field 数组、动态规划
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @returns {number} max
 */
const maxSubArray = (nums) => {
  const len = nums.length;
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < len; i++) {
    sum = sum > 0 ? sum + nums[i] : nums[i];
    max = Math.max(sum, max);
  }
  return max;
};

const ret = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(ret);
