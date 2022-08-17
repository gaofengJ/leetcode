/**
 * @description 三数之和
 * @field 排序 + 双指针
 * @description 时间复杂度：O(n²)。数组排序O(nlogn)，遍历数组O(n)，双指针O(n)，总体O(nlogn)+O(n)*O(n)，O(n²)
 * @description 空间复杂度：O(1)
 * @param {number[]} nums
 * @returns [][]
 */
const threeSum = (nums) => {
  if (!nums || nums.length < 3) return []; // 异常输入
  const ret = [];
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) return ret; // 如果nums[i] > 0，后面不会再有满足条件的，直接返回即可
    // eslint-disable-next-line no-continue
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 防止重复
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        ret.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }
        left += 1;
        right -= 1;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  return ret;
};
