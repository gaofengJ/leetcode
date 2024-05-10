const simplifyPath = (path) => {
  const arr = path.split('/').filter((i) => i);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '.') continue;
    if (arr[i] === '..') {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return `/${stack.join('/')}`;
};
