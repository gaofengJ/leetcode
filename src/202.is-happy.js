const isHappy = (n) => {
  const map = new Map();
  while (!map.has(n) && n !== 1) {
    map.set(n, 1);
    let total = 0;
    for (let i = 0; i < `${n}`.length; i++) {
      total += (+(`${n}`[i])) ** 2;
    }
    n = total;
    if (n === 1) return true;
  }
  return n === 1;
};
