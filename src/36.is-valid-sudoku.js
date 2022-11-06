const getBox = (i, j) => { // 获取box位置
  if (i < 3) {
    if (j < 3) {
      return 1;
    }
    if (j < 6) {
      return 2;
    }
    return 3;
  }
  if (i < 6) {
    if (j < 3) {
      return 4;
    }
    if (j < 6) {
      return 5;
    }
    return 6;
  }
  if (j < 3) {
    return 7;
  }
  if (j < 6) {
    return 8;
  }
  return 9;
};

/**
 * 有效的数组
 * @description 时间复杂度：O(1)。数独共有 81 个单元格，只需要对每个单元格遍历一次即可
 * @description 空间复杂度：O(1)。由于数独的大小固定，因此哈希表的空间也是固定的。
 * @param {string[][]} board
 * @returns
 */
const isValidSudoku = (board) => {
  const map = {}; // 用于存放行，列，box信息
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      const curBox = getBox(i, j);
      if (map[`line${i}-${board[i][j]}`] || map[`row${j}-${board[i][j]}`] || map[`box${curBox}-${board[i][j]}`]) return false;
      map[`line${i}-${board[i][j]}`] = 1;
      map[`row${j}-${board[i][j]}`] = 1;
      map[`box${curBox}-${board[i][j]}`] = 1;
    }
  }
  return true;
};
