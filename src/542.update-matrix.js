/**
 * 01矩形
 * @description 时间复杂度：O(n * m)
 * @description 空间复杂度：O(n * m)
 * @param {[][]} mat
 * @returns
 */
const updateMatrix = (mat) => {
  const stack = [];
  const m = mat.length;
  const n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        stack.push([i, j]);
      } else {
        mat[i][j] = -1; // -1代表未访问过
      }
    }
  }
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  while (stack.length) {
    const temp = stack.shift();
    const tempX = temp[0];
    const tempY = temp[1];
    for (let j = 0; j < 4; j++) {
      const curX = tempX + dx[j];
      const curY = tempY + dy[j];
      if (curX >= 0 && curX < m && curY >= 0 && curY < n && mat[curX][curY] === -1) {
        mat[curX][curY] = mat[tempX][tempY] + 1; // 当前点到0的距离
        stack.push([curX, curY]);
      }
    }
  }
  return mat;
};
