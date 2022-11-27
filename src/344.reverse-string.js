/**
 * 反转字符串
 * @description 时间复杂度：O(n)。其中 n 为字符数组的长度。一共执行了 n/2 次的交换。
 * @description 空间复杂度：O(1)。
 * @param {string[]} s
 * @returns
 */
const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};
