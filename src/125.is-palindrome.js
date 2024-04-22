const isPalindrome = (s) => {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
      str += s[i].toLowerCase();
    } else if ((s[i] >= '0' && s[i] <= '9') || (s[i] >= 'a' && s[i] <= 'z')) {
      str += s[i];
    }
  }
  const strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    if (str[i] !== str[strLen - i - 1]) return false;
  }
  return true;
};
