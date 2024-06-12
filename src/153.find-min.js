const findMin = (nums) => {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] > nums[left]) return nums[left];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      right = mid - 1;
    }
  }
};
