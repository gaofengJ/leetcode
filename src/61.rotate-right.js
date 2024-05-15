import { ListNode } from './helpers/ListNode';

const rotateRight = (head, k) => {
  if (!head) return null;
  let len = 0;
  let cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  k %= len;
  if (k === 0 || !head.next) return head;
  const right = new ListNode(-1, head);
  cur = right.next;
  for (let i = 1; i < len - k; i++) {
    cur = cur.next;
  }
  const left = new ListNode(-1, cur.next);
  cur.next = null;
  cur = left.next;
  for (let i = 1; i < k; i++) {
    cur = cur.next;
  }
  cur.next = right.next;
  return left.next;
};
