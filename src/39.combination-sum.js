const combinationSum = (candidates, target) => {
  const ret = [];
  const dfs = (start, path, sum) => {
    if (sum > target) return;
    if (sum === target) {
      ret.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(i, path, sum + candidates[i], path);
      path.pop();
    }
  };
  dfs(0, [], 0);
  return ret;
};
