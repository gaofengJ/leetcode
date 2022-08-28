/**
 * @description 删除排序数组中的重复项
 * @field 双指针
 * @description 时间复杂度：O(n)。其中 n 是数组的长度。快指针和慢指针最多各移动 n 次。
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @returns
 */
const removeDuplicates = (nums) => {
  const len = nums.length;
  let left = 0;
  let right = 1;
  while (right < len) {
    if (nums[left] === nums[right]) {
      right += 1;
    } else {
      if (nums[left] < nums[right]) {
        nums[left + 1] = nums[right];
      }
      left += 1;
      right += 1;
    }
  }
  return left + 1;
};
