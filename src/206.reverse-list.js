function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * 反转链表
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(n)。
 * @param {ListNode} head
 * @returns
 */
const reverseList = (head) => {
  if (!head) return null;
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  const ret = new ListNode(list[list.length - 1]);
  let cur = ret;
  for (let i = list.length - 2; i >= 0; i--) {
    cur.next = new ListNode(list[i]);
    cur = cur.next;
  }
  return ret;
};

/**
 * 反转链表
 * @description 时间复杂度：O(n)。
 * @description 空间复杂度：O(1)。
 * @field 迭代法
 */
const reverseList = (head) => {
  let prev = null;
  let cur = head;
  while (cur) {
    let tempNext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tempNext;
  }
  return prev;
}
