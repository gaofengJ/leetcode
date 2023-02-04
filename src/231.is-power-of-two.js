/**
 * 2的幂
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 * @param {number} n
 * @returns
 */
const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;
