const insert = (intervals, newInterval) => {
  const newIntervals = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);
  const ret = [];
  let index = -1;
  for (let i = 0; i < newIntervals.length; i++) {
    if (index === -1) {
      ret.push(newIntervals[i]);
      index++;
    } else {
      const [left, right] = newIntervals[i];
      const [innerLeft, innerRight] = ret[index];
      if (left >= innerLeft && left <= innerRight
        || right >= innerLeft && right <= innerRight
        || left >= innerLeft && right <= innerRight) {
        ret[index] = [innerLeft, Math.max(right, innerRight)];
      } else {
        ret.push(newIntervals[i]);
        index++;
      }
    }
  }
  return ret;
};
