const myPow = (x, n) => {
  if (x === 0 || x === 1) return x;
  if (n === 0) return 1;
  let ret = x;
  let i = 1;
  while (i * 2 <= Math.abs(n)) {
    ret *= ret;
    i *= 2;
  }
  for (let j = i + 1; j <= Math.abs(n); j++) {
    ret *= x;
  }
  return n > 0 ? ret : 1 / ret;
}