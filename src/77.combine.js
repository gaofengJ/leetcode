const dfs = (n, k, begin, path, ret) => {
  if (path.length === k) {
    ret.push([...path]); // 拷贝path
    return;
  }
  for (let i = begin; i <= n; i++) {
    path.push(i);
    dfs(n, k, i + 1, path, ret);
    path.pop(); // dfs回头的过程，递归之前做什么，递归之后做逆向操作
  }
};

/**
 * 组合
 * @param {number} n
 * @param {number} k
 * @returns [][]
 */
const combine = (n, k) => {
  if (k <= 0 || n < k) return [];
  const ret = [];
  const path = [];
  dfs(n, k, 1, path, ret);
  return ret;
};
