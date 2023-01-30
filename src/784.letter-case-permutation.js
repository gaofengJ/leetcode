const isLetter = (char) => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';

const swapCase = (char) => {
  if (char >= 'a' && char <= 'z') return char.toUpperCase();
  if (char >= 'A' && char <= 'Z') return char.toLowerCase();
};

const dfs = (index, s, temp, ret) => {
  if (index === s.length) {
    ret.push(temp);
    return;
  }
  dfs(index + 1, s, `${temp}${s[index]}`, ret);
  if (isLetter(s[index])) {
    dfs(index + 1, s, `${temp}${swapCase(s[index])}`, ret);
  }
};

/**
 * 全排列
 * @param {string} s
 * @returns
 */
const letterCasePermutation = (s) => {
  const temp = '';
  const ret = [];
  dfs(0, s, temp, ret);
  return ret;
};
