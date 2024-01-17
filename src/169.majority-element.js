/**
 * 题解：https://leetcode.cn/problems/majority-element/solutions/146811/3chong-fang-fa-by-gfu-2/?envType=study-plan-v2&envId=top-interview-150
 *
 */
const majorityElement = (nums) => {
  let num = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (num === nums[i]) {
      count++;
    } else {
      count--;
      if (count === 0) {
        num = nums[i + 1] || num;
        i++;
        count = 1;
      }
    }
  }
  return num;
};
