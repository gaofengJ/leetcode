/**
 * 有序数组的平方
 * @description 时间复杂度：O(n log n)。
 * @description 空间复杂度：O(log n)。
 * @param {number[]} nums
 * @returns
 */
const sortedSquares = (nums) => {
  const squareNums = nums.map((item) => item ** 2);
  return squareNums.sort((a, b) => a - b);
};
