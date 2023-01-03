/**
 * 图像渲染
 * @field 广度优先搜索
 * @description 时间复杂度：O(m * n)。其中 n 和 m 分别是二维数组的行数和列数。
 * @description 空间复杂度：O(m * n)。其中 n 和 m 分别是二维数组的行数和列数，主要为队列的开销
 * @param {[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @returns
 */
const floodFill = (image, sr, sc, color) => {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  const m = image.length;
  const n = image[0].length;
  const queue = [[sr, sc]];
  image[sr][sc] = color;
  while (queue.length) {
    const tempCell = queue.shift();
    for (let i = 0; i < 4; i++) {
      const tempX = tempCell[0] + dx[i];
      const tempY = tempCell[1] + dy[i];
      if (tempX >= 0 && tempX < m && tempY >= 0 && tempY < n
        && image[tempX][tempY] === originalColor) {
        queue.push([tempX, tempY]);
        image[tempX][tempY] = color;
      }
    }
  }
  return image;
};

/**
 * 图像渲染
 * @field 深度优先搜索
 * @description 时间复杂度：O(m * n)。其中 n 和 m 分别是二维数组的行数和列数。
 * @description 空间复杂度：O(m * n)。其中 n 和 m 分别是二维数组的行数和列数，主要为队列的开销
 * @param {[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @returns
 */
const floodFill = (image, sr, sc, color) => {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  const m = image.length;
  const n = image[0].length;
  const dx = [1, 0, 0, -1];
  const dy = [0, 1, -1, 0];
  
  const dfs = (x, y) => {
    if (image[x][y] === originalColor) {
      image[x][y] = color;
      for (let i = 0; i < 4; i++) {
        const tempX = x + dx[i];
        const tempY = y + dy[i];
        if (tempX >= 0 && tempX < m && tempY >= 0 && tempY < n) {
          dfs(tempX, tempY);
        }
      }
    }
  };
  dfs(sr, sc);
  return image;
}
