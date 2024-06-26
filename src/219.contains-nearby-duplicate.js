const containsNearbyDuplicate = (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map.get(nums[i]) - i) <= k) return true;
    map.set(nums[i], i);
  }
  return false;
};
