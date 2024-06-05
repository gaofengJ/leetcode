import { ListNode } from './helpers/ListNode';

const sortList = (head) => {
  if (!head) return null;
  const pre = new ListNode(-1);
  pre.next = head;
  let cur = pre.next;
  const nodeArr = [];
  while (cur) {
    nodeArr.push(cur);
    cur = cur.next;
  }
  nodeArr.sort((a, b) => a.val - b.val);
  console.log('nodeArr', nodeArr);
  pre.next = nodeArr[0];
  cur = pre.next;
  for (let i = 1; i < nodeArr.length; i++) {
    const tempNode = nodeArr[i];
    if (i === nodeArr.length - 1) {
      tempNode.next = null;
    } else {
      tempNode.next = nodeArr[i + 1];
    }
    cur.next = tempNode;
    cur = cur.next;
  }
  return pre.next;
};
