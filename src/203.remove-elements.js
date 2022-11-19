function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * 移除链表元素
 * @description 时间复杂度：O(n)。其中 n 是链表的长度。需要遍历链表一次。
 * @description 空间复杂度：O(1)。
 * @field 链表，迭代
 * @param {ListNode} head
 * @param {number} val
 * @returns
 */
const removeElements = (head, val) => {
  const prev = new ListNode(-1);
  prev.next = head;
  let cur = prev;
  while (cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return prev.next;
};
