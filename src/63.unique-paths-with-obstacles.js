const uniquePathsWithObstacles = (obstacleGrid) => {
  if (obstacleGrid[0][0] === 1) return 0; // 如果起点有障碍物，直接返回0

  const mLen = obstacleGrid.length;
  const nLen = obstacleGrid[0].length;
  const dp = new Array(mLen);

  for (let i = 0; i < mLen; i++) {
    dp[i] = new Array(nLen).fill(0);
  }

  dp[0][0] = 1; // 起点初始化为1

  // 初始化第一行
  for (let j = 1; j < nLen; j++) {
    if (obstacleGrid[0][j] === 1) {
      dp[0][j] = 0;
    } else {
      dp[0][j] = dp[0][j - 1];
    }
  }

  // 初始化第一列
  for (let i = 1; i < mLen; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i][0] = 0;
    } else {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let i = 1; i < mLen; i++) {
    for (let j = 1; j < nLen; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0; // 如果有障碍物，则路径数为0
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j]; // 否则，路径数为左边和上边路径数之和
      }
    }
  }

  return dp[mLen - 1][nLen - 1]; // 返回到达右下角的路径数
};
