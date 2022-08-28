/**
 * @description 搜索插入位置
 * @field 二分
 * @description 时间复杂度：O(logn)，其中 n 为数组的长度。二分查找所需的时间复杂度为 O(logn)。
 * @description 空间复杂度：O(1)。我们只需要常数空间存放若干变量。
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
