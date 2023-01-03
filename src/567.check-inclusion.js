/**
 * @description 字符串的排序
 * @description 时间复杂度：O(n + m + |Σ|)。其中Σ是字符集的长度。∣Σ∣=26。
 * @description 空间复杂度：O(|Σ|)。
 * @param {string} s1
 * @param {string} s2
 * @returns
 */
const checkInclusion = (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) return false;
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    arr1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  if (arr1.join('') === arr2.join('')) return true;
  for (let i = len1; i < len2; i++) {
    arr2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    arr2[s2[i - len1].charCodeAt() - 'a'.charCodeAt()]--;
    if (arr1.join('') === arr2.join('')) return true;
  }
  return false;
};
