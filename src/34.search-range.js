const searchRange = (nums, target) => {
  let pivot = -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      pivot = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (pivot === -1) return [-1, -1];
  for (let i = pivot; i >= 0; i--) {
    if (nums[i] === target) left = i;
  }
  for (let i = pivot; i < nums.length; i++) {
    if (nums[i] === target) right = i;
  }
  return [left, right];
};
