const trailingZeroes = (n) => {
  if (n === 0) return 0;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 !== 0) continue;
    let temp = i;
    while (temp > 0 && temp % 5 === 0) {
      temp /=  5;
      count++;
    }
  }
  return count;
}