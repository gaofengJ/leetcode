/* eslint-disable no-bitwise */
/**
 * 颠倒二进制位
 * 时间复杂度：O(log n)
 * 空间复杂度：O(1)
 * @param {number} n
 * @returns
 */
const reverseBits = (n) => {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};
