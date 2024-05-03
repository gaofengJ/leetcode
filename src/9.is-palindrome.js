/**
 * @description 回文数
 * @field 回文，数字
 * @description 时间复杂度：O(log n)。对于每次迭代，我们会将输入除以 10，因此时间复杂度为 O(log n)。
 * @description 空间复杂度：O(1)
 */
// const isPalindrome = (x) => {
//   if (x < 0) return false;
//   let sum = 0;
//   let cur = x;
//   while (cur !== 0) {
//     sum = sum * 10 + cur % 10;
//     cur = Math.floor(cur / 10);
//   }
//   return x === sum;
// };

const isPalindrome = (x) => {
  const str = `${x}`;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
