// const isPalindrome = (s) => {
//   const reverseStr = s.split('').reverse().join('');
//   return s === reverseStr;
// };

/**
 * @description 最长回文子串（暴力破解）leetcode最后一个长用例过不了
 * @description 时间复杂度：O(n³)。for 循环里边判断是否为回文 O(n²)，所以时间复杂度为 O(n³)
 * @param {string} 空间复杂度：O(1)，常数个变量
 * @returns {string}
 */
// const longestPalindrome = (s) => {
//   const len = s.length;
//   let max = 0;
//   let ret = '';
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       const str = s.substring(i, j);
//       if (isPalindrome(str) && str.length > max) {
//         max = str.length;
//         ret = str;
//       }
//     }
//   }
//   return ret;
// };

const expandLongestPalindrome = (s, left, right) => {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1; // (r - 1) - (l + 1) + 1 = r - l - 1
};

/**
 * @description 最长回文子串（中心扩散法）
 * @description 时间复杂度：O(n²)。
 * @param {string} 空间复杂度：O(1)。
 * @returns {string}
 */
const longestPalindrome = (s) => {
  const len = s.length;
  let max = 0; // 最大长度
  let left = 0; // 左指针
  let right = 0;

  for (let i = 0; i < len; i++) {
    const oddCenterlen = expandLongestPalindrome(s, i, i); // 奇数中心长度 eg aba
    const evenCenterLen = expandLongestPalindrome(s, i, i + 1); // 偶数中心长度 eg abba
    max = Math.max(oddCenterlen, evenCenterLen, max);
    if (max > right - left + 1) {
      left = i - Math.floor((max - 1) / 2);
      right = i + Math.floor(max / 2);
    }
  }
  return s.substring(left, right + 1);
};

console.log(longestPalindrome('babad'));
