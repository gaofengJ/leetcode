const hIndex = (citations) => {
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    const outer = [citations[i]];
    if (outer <= h) continue;
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] >= outer) {
        count++;
      }
    }
    if (count > h) {
      h = Math.min(outer, count);
    }
  }
  return h;
};
