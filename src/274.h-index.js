const hIndex = (citations) => {
  let h = 0;
  const sortedCitations = citations.sort((a, b) => b - a);
  for (let i = 0; i < sortedCitations.length; i++) {
    if (i + 1 <= sortedCitations[i]) {
      h += 1;
    }
  }
  return h;
};
