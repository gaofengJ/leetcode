const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

/**
 * 反转字符串中的单词 III
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(1)。
 * @param {string} s
 * @returns
 */
const reverseWords = (s) => {
  const arr = s.split(' ');
  const mapArr = arr.map((item) => reverseString(item.split('')).join(''));
  const res = mapArr.join(' ');
  return res;
};
