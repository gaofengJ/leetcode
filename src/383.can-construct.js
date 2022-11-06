/**
 * 赎金信
 * @description 时间复杂度：O(m + n)
 * @description 空间复杂度：O(S)，S 是字符集，这道题中 S 为全部小写英语字母，因此 ∣S∣=26。
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns
 */
const canConstruct = (ransomNote, magazine) => {
  const map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]] += 1;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]] || map[ransomNote[i]] < 1) return false;
    map[ransomNote[i]] -= 1;
  }
  return true;
};
