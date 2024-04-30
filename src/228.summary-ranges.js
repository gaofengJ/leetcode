const summaryRanges = (nums) => {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];
  const ret = [];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      ret.push(nums[index] === nums[i - 1] ? `${nums[index]}` : `${nums[index]}->${nums[i - 1]}`);
      index = i;
    }
    if (i === nums.length - 1) {
      ret.push(nums[index] === nums[i] ? `${nums[index]}` : `${nums[index]}->${nums[i]}`);
    }
  }
  return ret;
};
