const merge = (intervals) => {
  const ret = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let index = -1;
  for (let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i];
    if (index === -1) {
      ret.push([left, right]);
      index++;
    } else {
      const [innerLeft, innerRight] = ret[index];
      if (innerLeft <= left && left <= innerRight
        || innerLeft <= right && right <= innerRight
        || left >= innerLeft && right <= innerRight) {
        ret[index] = [innerLeft, Math.max(innerRight, right)];
      } else {
        ret.push([left, right]);
        index++;
      }
    }
  }
  return ret;
};
