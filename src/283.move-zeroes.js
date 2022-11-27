/**
 * 移动零
 * @description 时间复杂度：O(n)。每个位置至多被遍历两次。
 * @description 空间复杂度：O(1)。
 * @param {number[]} nums
 * @returns
 */
const moveZeroes = (nums) => {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right]) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++;
    }
    right++;
  }
  return nums;
};
