/**
 * 矩阵置零
 * @description 时间复杂度：O(mn)
 * @description 空间复杂度：O(m + n)
 * @param {number[][]} matrix
 */
const setZeroes = (matrix) => {
  const map = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        map[`line${i}`] = 1;
        map[`row${j}`] = 1;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (map[`line${i}`] || map[`row${j}`]) matrix[i][j] = 0;
    }
  }
};
