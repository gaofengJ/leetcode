/**
 * 位1的个数
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number} n
 * @returns
 */
// const hammingWeight = (n) => {
//   let ret = 0;
//   for (let i = 0; i < 32; i++) {
//     // eslint-disable-next-line no-bitwise
//     if ((n & (1 << i)) !== 0) {
//       ret++;
//     }
//   }
//   return ret;
// };

const hammingWeight = (n) => {
  const arr = n.toString(2).split('');
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') ret++;
  }
  return ret;
};
