function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @description 获取链表长度
 * @param {ListNode} head
 * @returns {number} len
 */
const getLength = (head) => {
  let len = 0;
  while (head) {
    len += 1;
    head = head.next;
  }
  return len;
};

/**
 * @description 删除链表的倒数第n个节点
 * @field 链表
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(n)
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const len = getLength(head);
  const prev = new ListNode(0, head);
  let cur = prev;
  for (let i = 1; i < len - n + 1; i++) { // 注意i的初始值
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return prev.next;
};

/**
 * @description 删除链表的倒数第n个节点
 * @field 链表
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const prev = new ListNode(0, head);
  let fast = head;
  let slow = prev;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return prev.next;
}


