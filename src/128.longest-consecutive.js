const longestConsecutive = (nums) => {
  const map = new Map();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) continue;
    const left = map.get(nums[i] - 1) || 0;
    const right = map.get(nums[i] + 1) || 0;
    const curMax = left + right + 1;
    max = Math.max(max, curMax);
    map.set(nums[i], curMax); // 这里不是用于端点记录的，而是标记num已经在hash中，所以可以是随便一个值
    map.set(nums[i] + right, curMax);
    map.set(nums[i] - left, curMax);
  }
  return max;
};
