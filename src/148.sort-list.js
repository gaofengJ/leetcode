import { ListNode } from './helpers/ListNode';

const sortNodes = (left, right) => {
  const dummy = new ListNode(-1); // 虚拟头节点
  let cur = dummy;
  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  cur.next = left || right; // 剩余部分直接接上
  return dummy.next;
};

const sortList = (head) => {
  if (!head || !head.next) return head; // 处理空链表或只有一个节点的情况

  // 使用快慢指针找到链表中点
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 断开链表，形成左右两个子链表
  prev.next = null;

  // 递归排序左右子链表
  const left = sortList(head);
  const right = sortList(slow);

  // 合并两个已排序的子链表
  return sortNodes(left, right);
};
