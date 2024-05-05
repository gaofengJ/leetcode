const spiralOrder = (matrix) => {
  let direction = 'right';
  const ret = [];
  let rowMin = 1;
  let rowMax = matrix.length - 1;
  let columnMin = 0;
  let columnMax = matrix[0].length - 1;
  let i = 0;
  let j = 0;
  while (ret.length < matrix.length * matrix[0].length) {
    ret.push(matrix[i][j]);
    if (direction === 'right') {
      if (j === columnMax) {
        direction = 'bottom';
        columnMax--;
        i++;
      } else {
        j++;
      }
    } else if (direction === 'bottom') {
      if (i === rowMax) {
        direction = 'left';
        rowMax--;
        j--;
      } else {
        i++;
      }
    } else if (direction === 'left') {
      if (j === columnMin) {
        direction = 'top';
        columnMin++;
        i--;
      } else {
        j--;
      }
    } else if (direction === 'top') {
      if (i === rowMin) {
        direction = 'right';
        rowMin++;
        j++;
      } else {
        i--;
      }
    }
  }
  return ret;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
