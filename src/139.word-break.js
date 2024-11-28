/**
 * 题解：https://leetcode.cn/problems/word-break/solutions/302779/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/?envType=study-plan-v2&envId=top-interview-150
 * 在这道题中，dp 数组的每个元素之间确实没有直接的数学递推关系！！！
 */
const wordBreak = (s, wordDict) => {
  const map = new Map();
  for (let i = 0; i < wordDict.length; i++) {
    map.set(wordDict[i], 1);
  }
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) { // // j将 str 划分成两部分
      const suffix = s.slice(j, i); // 后缀部分 s[j: i-1]
      if (map.has(suffix) && dp[j]) { // 后缀部分是单词，且左侧子串[0,j-1]的dp[j]为真
        dp[i] = true; // // dp[i] = true了，i长度的子串已经可以拆成单词了，不需要j继续划分子串了
        break;
      }
    }
  }
  return dp[len];
};
