const inArea = (grid, i, j) => i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;

const dfs = (grid, i, j) => {
  if (!inArea(grid, i, j) || grid[i][j] !== '1') return;
  grid[i][j] = '2';
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};

const numIslands = (grid) => {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        num += 1;
        dfs(grid, i, j);
      }
    }
  }
  return num;
};
