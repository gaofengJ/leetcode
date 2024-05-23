const lowestCommonAncestor = (root, p, q) => {
  const arr = [];
  const nodeMap = new Map();
  const preOrder = (innerRoot, str = '') => {
    str += `${Math.abs(innerRoot.val)}`;
    if (innerRoot.left) {
      str += preOrder(innerRoot.left, str);
    }
    nodeMap.set(`${Math.abs(innerRoot.val)}`, innerRoot);
    if (innerRoot.right) {
      str += preOrder(innerRoot.right, str);
    }
    if (!innerRoot.left && !innerRoot.right) {
      arr.push(str);
      str = '';
      return str;
    }
    return '';
  };
  preOrder(root);
  console.log('arr', arr);
  let pStr = '';
  let qStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(`${Math.abs(p.val)}`) > -1) {
      pStr = pStr || arr[i];
      console.log('p', arr[i], Math.abs(p.val), pStr);
    }
    if (arr[i].indexOf(`${Math.abs(q.val)}`) > -1) {
      qStr = qStr || arr[i];
      console.log('q', arr[i], Math.abs(q.val), qStr);
    }
  }
  console.log(pStr, qStr);
  const map = new Map();
  for (let i = 0; i < pStr.length; i++) {
    console.log('pStr[i]', pStr[i], `${Math.abs(q.val)}`);
    if (pStr[i] === `${Math.abs(q.val)}`) {
      console.log('111111', map.has(`${Math.abs(p.val)}`));
      if (map.has(`${Math.abs(p.val)}`)) return nodeMap.get(`${Math.abs(p.val)}`);
      return nodeMap.get(`${Math.abs(q.val)}`);
    }
    map.set(pStr[i], 1);
  }
  console.log('map', map);
  for (let i = qStr.length - 1; i >= 0; i--) {
    console.log(qStr[i], map.has(qStr[i]));
    if (map.has(qStr[i])) return nodeMap.get(qStr[i]);
  }
};
