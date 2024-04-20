// const lengthOfLastWord = (s) => {
//   const arr = s.trim().split(' ');
//   return arr[arr.length - 1].length;
// };

const lengthOfLastWord = (s) => {
  let num = 0;
  let isStart = false;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i], !s[i]);
    if (s[i] === ' ' && isStart) return num;
    if (s[i] !== ' ') {
      isStart = true;
      num++;
    }
  }
  return num;
};

lengthOfLastWord('Hello World');
