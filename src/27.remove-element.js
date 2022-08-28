/**
 * @description 移除元素
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @param {number} val
 * @returns
 */
const removeElement = (nums, val) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (nums[p] !== nums[i]) {
        nums[p] = nums[i];
      }
      p += 1;
    }
  }
  return p;
};
