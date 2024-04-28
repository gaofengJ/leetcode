const wordPattern = (pattern, s) => {
  const arr = s.split(' ');
  if (arr.length !== pattern.length) return false;
  const strMap = new Map();
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!strMap.has(pattern[i])) {
      strMap.set(pattern[i], arr[i]);
    } else if (strMap.get(pattern[i]) !== arr[i]) return false;
    if (!arrMap.has(arr[i])) {
      arrMap.set(arr[i], pattern[i]);
    } else if (arrMap.get(arr[i]) !== pattern[i]) return false;
  }
  return true;
};
