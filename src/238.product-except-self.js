const productExceptSelf = (nums) => {
  const len = nums.length;
  const ret = [];
  ret[0] = 1;
  for (let i = 1; i < len; i++) {
    ret[i] = ret[i - 1] * nums[i - 1];
  }
  let r = 1;
  for (let i = len - 1; i >= 0; i--) {
    ret[i] *= r;
    r *= nums[i];
  }
  return ret;
};
