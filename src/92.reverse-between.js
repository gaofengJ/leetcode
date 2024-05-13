function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
};

const reverseBetween = (head, left, right) => {
  const prev = new ListNode(-1, head);
  let pre = prev;
  // 1、从虚拟头结点走 left-1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 2、从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  // 3、切断出一个子链表
  const leftNode = pre.next;
  const curr = rightNode.next;

  // 切断链接
  pre.next = null;
  rightNode.next = null;

  // 4、反转链表的子区间
  reverseLinkedList(leftNode);

  // 5、拼接到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return prev.next;
};
