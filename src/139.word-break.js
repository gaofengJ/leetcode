const wordBreak = (s, wordDict) => {
  const map = new Map();
  for (let i = 0; i < wordDict.length; i++) {
    map.set(wordDict[i], 1);
  }
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const suffix = s.slice(j, i);
      if (map.has(suffix) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};
