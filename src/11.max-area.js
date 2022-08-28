/**
 * @description 盛最多水的容器
 * @field 双指针
 * @description 时间复杂度：O(n)。 双指针遍历一次底边宽度 n。
 * @description 空间复杂度：O(1)。变量left，right，max使用常数额外空间
 * @param {number[]} height
 * @returns {number}
 */
const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
