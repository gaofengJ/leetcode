const findMinArrowShots = (points) => {
  if (!points.length) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  let ans = 1;
  for (let i = 0; i < points.length; i++) {
    const balloon = points[i];
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }
  return ans;
};
