const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push('');
  }
  let rowIndex = 0;
  let flag = -1;
  for (let i = 0; i < s.length; i++) {
    rows[rowIndex] += s[i];
    if (rowIndex === 0 || rowIndex === numRows - 1) {
      flag = -flag;
    }
    rowIndex += flag;
  }
  return rows.join('');
};
