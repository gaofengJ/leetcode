/**
 * 腐烂的橘子
 * @description 时间复杂度：O(m * n)
 * @description 空间复杂度：O(m * n)
 * @param {[][]} grid
 * @returns
 */
const orangesRotting = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let freshArr = [];
  const emptyArr = [];
  const rottingStack = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) emptyArr.push(grid[i][j]);
      if (grid[i][j] === 1) {
        freshArr.push(grid[i][j]);
        grid[i][j] = -1;
      }
      if (grid[i][j] === 2) rottingStack.push([i, j]);
    }
  }
  if (!rottingStack.length && !freshArr.length) return 0; // 全是空白格（0）
  if (!rottingStack.length) return -1; // 无腐烂橘子
  if (rottingStack.length && !freshArr.length) return 0; // 有腐烂无新鲜
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  while (rottingStack.length) {
    const temp = rottingStack.shift();
    const tempX = temp[0];
    const tempY = temp[1];
    for (let i = 0; i < 4; i++) {
      const curX = tempX + dx[i];
      const curY = tempY + dy[i];
      if (curX >= 0 && curX < m && curY >= 0 && curY < n && grid[curX][curY] === -1) {
        grid[curX][curY] = grid[tempX][tempY] + 1;
        rottingStack.push([curX, curY]);
      }
    }
  }
  freshArr = [];
  let time = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === -1) { // 在之前将所有新鲜的（1）置为了-1
        freshArr.push(grid[i][j]);
      }
      time = Math.max(time, grid[i][j]);
    }
  }
  if (freshArr.length) return -1; // 还有新鲜的说明触及不到
  return time - 2; // 最初腐烂的为2
};
