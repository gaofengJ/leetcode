const mySqrt = (x) => {
  if (x < 2) return x;
  let left = 0;
  let right = x;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log(left, right);
  }
  return left * left > x ? left - 1 : left;
};

mySqrt(6);
