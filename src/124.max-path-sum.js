const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

  const dfs = (innerRoot) => {
    if (innerRoot == null) { // 遍历到null节点，收益0
      return 0;
    }
    const left = dfs(innerRoot.left); // 左子树提供的最大路径和
    const right = dfs(innerRoot.right); // 右子树提供的最大路径和

    const innerMaxSum = left + innerRoot.val + right; // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum); // 挑战最大纪录

    const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };

  dfs(root); // 递归的入口

  return maxSum;
};
