const bfs = (grid, x, y) => {
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  let area = 0;
  const queue = [[x, y]];
  while (queue.length) {
    const temp = queue.shift();
    const tempX = temp[0];
    const tempY = temp[1];
    if (grid[tempX][tempY]) {
      area += 1;
      grid[tempX][tempY] = 0;
      for (let i = 0; i < 4; i++) {
        const curX = tempX + dx[i];
        const curY = tempY + dy[i];
        if (curX >= 0 && curX < grid.length && curY >= 0 && curY < grid[0].length
           && grid[curX][curY] === 1) {
          queue.push([curX, curY]);
        }
      }
    }
  }
  return area;
};

/**
 * 岛屿的最大面积
 * @description 时间复杂度：O(m * n)。
 * @description 空间复杂度：O(n * n)。栈中最多存放所有的土地，土地数量最多为m * n。
 * @param {[][]} grid
 * @returns
 */
const maxAreaOfIsland = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const temp = grid[i][j];
      if (temp === 0) continue;
      const tempArea = bfs(grid, i, j);
      max = Math.max(max, tempArea);
    }
  }
  return max;
};
