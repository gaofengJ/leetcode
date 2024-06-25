const maximalSquare = (matrix) => {
  const n = matrix.length;
  const m = matrix[0].length;
  let max = 0;
  const arr = new Array(n).fill().map(() => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) arr[i][j] = 1;
        else {
          arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
        }
      }
      max = Math.max(arr[i][j], max);
    }
  }
  return max * max;
};
