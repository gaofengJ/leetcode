const maxSubarraySumCircular = (nums) => {
  const n = nums.length;
  const queue = [];
  let pre = nums[0];
  let res = nums[0];
  queue.push([0, pre]);
  for (let i = 1; i < 2 * n; i++) {
    while (queue.length !== 0 && queue[0][0] < i - n) {
      queue.shift();
    }
    pre += nums[i % n];
    res = Math.max(res, pre - queue[0][1]);
    while (queue.length !== 0 && queue[queue.length - 1][1] >= pre) {
      queue.pop();
    }
    queue.push([i, pre]);
  }
  return res;
};
