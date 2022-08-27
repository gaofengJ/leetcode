/**
 * @description 罗马数字转整数
 * @field 数字、字符串
 * @description 时间复杂度：O(n)。其中 n 是字符串 s 的长度。
 * @description 空间复杂度：O(1)
 * @param {string} s
 * @returns {number} sum
 */
const romanToInt = (s) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]]) {
      sum -= romanMap[s[i]];
    } else {
      sum += romanMap[s[i]];
    }
  }
  return sum;
};
