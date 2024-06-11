const searchMatrix = (matrix, target) => {
  const mLen = matrix.length;
  const nLen = matrix[0].length;
  let left = 0;
  let right = mLen * nLen - 1;
  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    const num = matrix[Math.floor(pivot / nLen)][pivot % nLen];
    if (num === target) {
      return true;
    } if (num > target) {
      right = pivot - 1;
    } else if (num < target) {
      left = pivot + 1;
    }
  }
  return false;
};
