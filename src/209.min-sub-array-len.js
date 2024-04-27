const minSubArrayLen = (target, nums) => {
  let min = nums.length + 1;
  let sum = 0; // 存储多个元素的和
  let total = 0; // 存储多个元素的个数
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    total += 1;
    if (sum >= target) {
      while (sum >= target) {
        sum -= nums[i - total + 1];
        total -= 1;
      }
      min = Math.min(min, total + 1); // 12行多减了一次
    }
    i += 1;
  }
  return min > nums.length ? 0 : min;
};
