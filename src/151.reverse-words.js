const reverseWords = (s) => {
  let ret = '';
  let word = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (word) {
        ret += ret ? ` ${word}` : word;
      }
      word = '';
    } else {
      word = s[i] + word;
    }
  }
  if (word) ret += ret ? ` ${word}` : word;
  return ret;
};
