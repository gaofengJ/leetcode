const minPathSum = (grid) => {
  const mLen = grid.length;
  const nLen = grid[0].length;
  for (let i = 0; i < mLen; i++) {
    for (let j = 0; j < nLen; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  }
  return grid[mLen - 1][nLen - 1];
};
