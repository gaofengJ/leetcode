const isBadVersion = () => true;

/**
 * 第一个错误的版本
 * @description 时间复杂度：O(log n)。
 * @description 空间复杂度：O(1)
 * @param {Function} isBadVersion
 * @returns
 */
const solution = (isBadVersion) => (n) => {
  let left = 1;
  let right = n;
  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    if (isBadVersion(pivot)) {
      right = pivot;
    } else {
      left = pivot + 1;
    }
  }
  return left;
};
