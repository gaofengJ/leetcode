/**
 * @description 存在重复元素
 * @field 数组、哈希表
 * @description 时间复杂度：O(n)。其中 n 为数组的长度。
 * @description 空间复杂度：O(n)。其中 n 为数组的长度。
 * @param {number[]} nums
 * @returns true | false
 */
const containsDuplicate = (nums) => {
  const tempObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (tempObj[nums[i]]) return true;
    tempObj[nums[i]] = 1;
  }
  return false;
};

containsDuplicate([1, 2, 3, 4, 5, 6]);
