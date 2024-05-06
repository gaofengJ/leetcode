const rotate = (matrix) => {
  const len = matrix.length;
  let min = 0;
  let max = len - 1;
  while (min < max) {
    console.log(min, max);
    for (let i = min; i < max; i++) {
      const temp = matrix[min][i];
      matrix[min][i] = matrix[len - 1 - i][min];
      matrix[len - 1 - i][min] = matrix[max][len - 1 - i];
      matrix[max][len - 1 - i] = matrix[i][max];
      matrix[i][max] = temp;
    }
    min++;
    max--;
  }
  return matrix;
};
