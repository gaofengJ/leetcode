/**
 * 有效的字母异位词
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(S)，S 是字符集，这道题中 S 为全部小写英语字母，因此 ∣S∣=26。
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns
 */
const isAnagram = (s, t) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) return false;
    map[t[i]] -= 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== 0) return false;
  }
  return true;
};
