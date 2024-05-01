/* eslint-disable no-bitwise */
const addBinary = (a, b) => {
  const len = Math.max(a.length, b.length);
  const lenDiff = Math.abs(a.length - b.length);
  for (let i = 0; i < lenDiff; i++) {
    if (a.length > b.length) {
      b = `0${b}`;
    } else {
      a = `0${a}`;
    }
  }
  let ret = '';
  let carry = '0';
  for (let i = len - 1; i >= 0; i--) {
    const cur = `${a[i] ^ b[i]}`;
    ret = `${(i === len - 1 ? cur : cur ^ carry)}${ret}`;
    carry = carry === '1' ? `${a[i] | b[i]}` : `${a[i] & b[i]}`;
  }
  if (carry === '1') ret = `${carry}${ret}`;
  return ret;
};
