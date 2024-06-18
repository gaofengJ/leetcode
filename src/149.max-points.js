/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = (points) => {
  let ans = 1;
  const n = points.length, map = new Map();
  for (let i = 0; i < n; i++) {
      if (ans >= n - i) break;
      const x1 = points[i][0], y1 = points[i][1];
      for (let j = i + 1; j < n; j++) {
          const x2 = points[j][0], y2 = points[j][1];
          let k = 0, b = 0;
          if (y1 === y2) {
              k = Infinity;
              b = y1;
          } else if (x1 === x2) {
              k = 0;
              b = x1;
          } else {
              k = (x1 - x2) / (y1 - y2);
              b = (x2 * y1 - y2 * x1) / (x2 - x1);
          }
          const sum = (map.get(`${k}:${b}`) || 1) + 1
          map.set(`${k}:${b}`, sum);
          if (sum > ans) ans = sum;
      }
      map.clear();
  }
  return ans;
};
