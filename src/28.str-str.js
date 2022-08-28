/**
 * @description 实现strStr
 * @field 字符串
 * @description 时间复杂度：O(n * m)。其中 n 是字符串 haystack 的长度，m 是字符串 needle 的长度。
 * 最坏情况下我们需要将字符串 needle 与字符串 haystack 的所有长度为 m 的子串均匹配一次。
 * @description 空间复杂度：O(1)
 * @param {string} haystack
 * @param {string} needle
 * @returns
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;
  const len1 = haystack.length;
  const len2 = needle.length;
  for (let i = 0; i + len2 <= len1; i++) {
    let flag = true;
    for (let j = 0; j < len2; j++) {
      if (haystack[i + j] !== needle[j]) flag = false;
    }
    if (flag) return i;
  }
  return -1;
};
