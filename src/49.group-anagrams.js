const groupAnagrams = (strs) => {
  const ret = [];
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortedStr = str.split('').sort().join();
    if (map.has(sortedStr)) {
      ret[map.get(sortedStr)].push(str);
    } else {
      ret.push([str]);
      map.set(sortedStr, ret.length - 1);
    }
  }
  return ret;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
