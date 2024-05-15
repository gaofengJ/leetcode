import { ListNode } from './helpers/ListNode';

const partition = (head, x) => {
  const left = new ListNode(-1);
  const right = new ListNode(-1);
  let leftCur = left;
  let rightCur = right;
  while (head) {
    if (head.val < x) {
      leftCur.next = head;
      leftCur = leftCur.next;
    } else {
      rightCur.next = head;
      rightCur = rightCur.next;
    }
    head = head.next;
  }
  rightCur.next = null;
  leftCur.next = right.next;
  return left.next;
};
