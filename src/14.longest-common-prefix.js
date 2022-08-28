/**
 * @description 最长公共前缀
 * @field 字符串
 * @description 时间复杂度：O(mn)。其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。
 * @description 空间复杂度：O(1)。使用的额外空间复杂度为常数
 * @param {string[]} strs
 * @returns
 */
const longestCommonPrefix = (strs) => {
  let minLen = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }
  let ret = '';
  for (let i = 0; i < minLen; i++) {
    let tempBool = true;
    const tempStr = strs[0].slice(0, i + 1);
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(tempStr)) tempBool = false;
    }
    if (tempBool) {
      ret = tempStr.length > ret.length ? tempStr : ret;
    }
  }
  return ret;
};

console.log(longestCommonPrefix(['reflower', 'flow', 'flight']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
console.log(longestCommonPrefix(['c', 'acc', 'ccc']));
