/**
 * 字符串中的第一个唯一字符
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：空间复杂度：O(∣Σ∣)，其中Σ是字符集，在本题中s只包含小写字母，因此∣Σ∣≤ 26。我们需要 O(∣Σ∣)的空间存储哈希映射。
 * @param {*} s
 * @returns
 */
const firstUniqChar = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};
