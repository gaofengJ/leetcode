const canJump = (nums) => {
  if (nums.length === 1) return true;
  const zeroIndexArr = [];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
      zeroIndexArr.push(i);
    }
  }
  if (!zeroIndexArr.length) return true;
  for (let i = 0; i < zeroIndexArr.length; i++) {
    const zeroIndex = zeroIndexArr[i];
    let tempBool = false;
    for (let j = 0; j < zeroIndex; j++) {
      if (j + nums[j] > zeroIndex) tempBool = true;
    }
    if (!tempBool) return false;
  }
  return true;
};
