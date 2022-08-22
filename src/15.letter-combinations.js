const dfs = (strArr, phoneMap, dights, deep, res) => {
  if (deep === dights.length) {
    res.push(strArr.join(''));
  } else {
    const dight = dights.charAt(deep);
    const letters = phoneMap[dight];
    for (let i = 0; i < letters.length; i++) {
      strArr.push(letters[i]);
      dfs(strArr, phoneMap, dights, deep + 1, res);
      strArr = strArr.slice(0, deep);
    }
  }
};

/**
 * @description 电话号码的字母组合
 * @field 回溯
 * @时间复杂度 时间复杂度：O(3^M×4^N)。M 是对应三个字母的数字个数，N 是对应四个字母的数字个数。
 * @空间复杂度 空间复杂度：空间复杂度：O(3^M×4^N)。一共要生成 3^M×4^N3个结果
 */
const letterCombinations = (dights) => {
  if (!dights) return [];
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'qrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const res = [];
  const strArr = [];

  dfs(strArr, phoneMap, dights, 0, res);

  return res;
};
