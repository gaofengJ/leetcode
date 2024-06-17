const rangeBitwiseAnd = (left, right) => {
  while (left < right) {
    // eslint-disable-next-line no-bitwise
    right &= (right - 1);
  }
  return right;
};
