/**
 * 重塑数组
 * @description 时间复杂度：O(rc)
 * @description 空间复杂度：O(1)
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @returns {number[][]}
 */
const matrixReshape = (mat, r, c) => {
  if (mat[0].length * mat.length !== r * c) return mat;
  const flatArr = mat.flat();
  const ret = [];
  let outerIndex = 0;
  for (let i = 0; i < flatArr.length; i++) {
    if (i % c === 0) {
      ret.push([]);
      outerIndex = i === 0 ? 0 : outerIndex + 1;
    }
    ret[outerIndex].push(flatArr[i]);
  }
  return ret;
};
