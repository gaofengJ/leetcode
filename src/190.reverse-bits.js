/* eslint-disable no-bitwise */
/**
 * 颠倒二进制位
 * 时间复杂度：O(log n)
 * 空间复杂度：O(1)
 * @param {number} n
 * @returns
 */
// const reverseBits = (n) => {
//   let rev = 0;
//   for (let i = 0; i < 32 && n > 0; ++i) {
//     rev |= (n & 1) << (31 - i);
//     n >>>= 1;
//   }
//   return rev >>> 0;
// };

const reverseBits = (n) => {
  let arr = `${n.toString(2)}`.split('');
  arr = [...new Array(32 - arr.length).fill('0'), ...arr];
  const len = arr.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return parseInt(arr.join(''), 2);
};
