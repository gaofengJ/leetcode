/**
 * @description 删除排序数组中的重复项
 * @field 双指针
 * @description 时间复杂度：O(n)。其中 n 是数组的长度。快指针和慢指针最多各移动 n 次。
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @returns
 */
const removeDuplicates = (nums) => {
  let left = 0;
  let right = 1;
  const len = nums.length;
  while (right < len) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      nums[left + 1] = nums[right];
      left++;
      right++;
    }
  }
  return left + 1;
};
