const isSubsequence = (s, t) => {
  if (!s) return true;
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[index]) {
      index++;
      if (index === s.length) return true;
    }
  }
  return false;
};
