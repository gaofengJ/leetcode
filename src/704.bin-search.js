/**
 * 二分查找
 * @description 时间复杂度：O(log n)。
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
const binSearch = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;
  while (max >= min) {
    const pivot = Math.floor((min + max) / 2);
    if (nums[pivot] > target) {
      max = pivot - 1;
    } else if (nums[pivot] < target) {
      min = pivot + 1;
    } else {
      return pivot;
    }
  }
  return -1;
};
