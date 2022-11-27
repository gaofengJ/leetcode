const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
  return nums;
};

/**
 * 翻转数组
 * @description 时间复杂度：O(n)，其中 n 为数组的长度。
 * 每个元素被翻转两次，一共 n 个元素，因此总时间复杂度为 O(2n)=O(n)。
 * @description 空间复杂度：O(1)。
 * @param {number[]} nums
 * @param {number} k
 * @returns
 */
const rotate = (nums, k) => {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};
