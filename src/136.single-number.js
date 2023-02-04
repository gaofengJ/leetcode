/**
 * 只出现一次的数字
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number[]} nums
 * @returns
 */
const singleNumber = (nums) => {
  let single = 0;
  for (let i = 0; i < nums.length; i++) {
    // eslint-disable-next-line no-bitwise
    single ^= nums[i];
  }
  return single;
};
