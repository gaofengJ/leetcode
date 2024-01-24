const jump = (nums) => {
  let start = 0;
  let end = 1;
  let count = 0;
  while (end < nums.length) {
    let maxPos = 0;
    for (let i = start; i < end; i++) {
      maxPos = Math.max(maxPos, nums[i] + i);
    }
    start = end;
    end = maxPos + 1;
    count++;
  }
  return count;
};
