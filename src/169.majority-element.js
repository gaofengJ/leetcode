/**
 * 题解：https://leetcode.cn/problems/majority-element/solutions/146811/3chong-fang-fa-by-gfu-2/?envType=study-plan-v2&envId=top-interview-150
 *
 */
const majorityElement = (nums) => {
  let num;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) num = nums[i];
    count += num === nums[i] ? 1 : -1;
  }
  return num;
};
