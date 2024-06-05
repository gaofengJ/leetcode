const letterCombinations = (digits) => {
  if (!digits.length) return [];
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const ret = [];
  const deep = (i = 0, str = '') => {
    if (i >= digits.length) {
      ret.push(str);
      str = '';
      return;
    }
    const digit = digitMap[digits[i]];
    for (let j = 0; j < digit.length; j++) {
      deep(i + 1, str + digit[j]);
    }
  };
  deep();
  return ret;
};
