const plusOne = (digits) => {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const val = digits[i];
    digits[i] = (val + carry === 10 ? 0 : val + carry);
    carry = val + carry === 10 ? 1 : 0;
  }
  if (carry) {
    digits.unshift(1);
  }
  return digits;
};
