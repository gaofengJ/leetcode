const dfs = (nums, ret, path, used) => {
  if (path.length === nums.length) {
    ret.push([...path]); // 拷贝path
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // if (path.includes(nums[i])) continue; // 增加了时间复杂度
    if (used[nums[i]]) continue; // 使用过的，跳过
    path.push(nums[i]);
    used[nums[i]] = true;
    dfs(nums, ret, path, used);
    path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
    used[nums[i]] = false;
  }
};

/**
 * 全排列
 * @param {number[]} nums
 * @returns
 */
const permute = (nums) => {
  const ret = [];
  const path = [];
  const used = {};
  dfs(nums, ret, path, used);
  return ret;
};
