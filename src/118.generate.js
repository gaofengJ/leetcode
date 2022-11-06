/**
 * 杨辉三角
 * @description 时间复杂度：O(numRows²)
 * @param {*} numRows
 * @returns
 */
const generate = (numRows) => {
  const ret = [[1]];
  for (let i = 1; i < numRows; i++) {
    ret.push([]);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        ret[i].push(1);
      } else {
        ret[i].push(ret[i - 1][j - 1] + ret[i - 1][j]);
      }
    }
  }
  return ret;
};

console.log(generate(3));
