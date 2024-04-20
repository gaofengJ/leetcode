const intToRoman = (num) => {
  const romanMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  };
  const romanArr = [1000, 500, 100, 50, 10, 5, 1];
  let ret = '';
  for (let i = 0; i < romanArr.length; i++) {
    const curNum = Math.floor(num / romanArr[i]);
    for (let j = 0; j < curNum; j++) {
      ret += romanMap[romanArr[i]];
    }
    num %= romanArr[i];
  }
  ret = ret.replace('DCCCC', 'CM');
  ret = ret.replace('CCCC', 'CD');
  ret = ret.replace('LXXXX', 'XC');
  ret = ret.replace('XXXX', 'XL');
  ret = ret.replace('VIIII', 'IX');
  ret = ret.replace('IIII', 'IV');
  return ret;
};
