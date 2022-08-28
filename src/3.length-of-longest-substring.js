/**
 * @field 滑动窗口
 * @description 不含重复的最长子串
 * @description 时间复杂度：O(n)。其中 n 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。
 * @description 空间复杂度：O(|Σ|)。其中 Σ 表示字符集（即字符串中可以出现的字符），∣Σ∣ 表示字符集的大小。
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s.length) return 0;
  let max = 0; // 最大长度
  let left = 0; // 左指针
  const tempMap = {};
  const len = s.length;

  for (let i = 0; i < len; i++) {
    if (Object.prototype.hasOwnProperty.call(tempMap, s[i])) {
      left = Math.max(left, tempMap[s[i]] + 1);
    }
    tempMap[s[i]] = i;
    max = Math.max(max, i - left + 1);
    console.log(tempMap, max);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abba'));
