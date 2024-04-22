const beStr = (arr, max) => {
  let wordLen = 0;
  const arrLen = arr.length;
  if (arrLen === 1) {
    return arr[0] + Array(max - arr[0].length + 1).join(' ');
  }
  for (let i = 0; i < arr.length; i++) {
    wordLen += arr[i].length;
  }
  if ((max - wordLen) % (arrLen - 1) === 0) {
    return arr.join(Array((max - wordLen) / (arrLen - 1) + 1).join(' '));
  }
  const k = (max - wordLen) % (arrLen - 1);
  const m = Math.floor((max - wordLen) / (arrLen - 1));
  let ret = '';
  for (let i = 0; i < arrLen; i++) {
    ret += arr[i];
    if (i === arrLen - 1) {
      break;
    }
    if (i + 1 <= k) {
      ret += Array(m + 2).join(' ');
    } else {
      ret += Array(m + 1).join(' ');
    }
  }
  return ret;
};

const fullJustify = (words, maxWidth) => {
  const ret = [];
  let tempLen = 0;
  let tmpArr = [];
  for (let i = 0; i < words.length; i++) {
    if (tempLen + words[i].length > maxWidth) {
      ret.push([...tmpArr]);
      tmpArr = [];
      tempLen = 0;
    }
    tmpArr.push(words[i]);
    tempLen += (words[i].length + 1);
  }
  if (tmpArr[0]) {
    ret.push(tmpArr);
  }
  for (let i = 0; i < ret.length; i++) {
    if (i < ret.length - 1) {
      ret[i] = beStr(ret[i], maxWidth);
      continue;
    }
    const k = ret[i].length;
    let tmpStr = '';
    for (let j = 0; j < k; j++) {
      tmpStr += ret[i][j];
      if (j < k - 1) {
        tmpStr += ' ';
      }
    }
    tmpStr += Array(maxWidth - tmpStr.length + 1).join(' ');
    ret[i] = tmpStr;
  }
  return ret;
};
