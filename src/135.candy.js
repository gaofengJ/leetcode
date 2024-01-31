const candy = (ratings) => {
  const len = ratings.length;
  const left = [];
  const right = [];
  for (let i = 0; i < len; i++) {
    left.push(1);
    right.push(1);
  }
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  let count = left[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
    count += Math.max(left[i], right[i]);
  }
  return count;
};
