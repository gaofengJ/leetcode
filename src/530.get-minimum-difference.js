const getMinimumDifference = (root) => {
  let min = 10 ** 5;
  const dfs = (innerRoot, arr = []) => {
    if (innerRoot.left) dfs(innerRoot.left, arr);
    arr.push(innerRoot.val);
    if (arr.length >= 2) {
      min = Math.min(min, innerRoot.val - arr[arr.length - 2]);
    }
    if (innerRoot.right) dfs(innerRoot.right, arr);
  };
  dfs(root);
  return min;
};
