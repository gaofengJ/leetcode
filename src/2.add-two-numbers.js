/* eslint-disable no-param-reassign */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @field 链表
 * @description 时间复杂度：O(max(m, n))。其中 m 和 n 分别为两个链表的长度。我们要遍历两个链表的全部位置，而处理每个位置只需要 O(1) 的时间。
 * @description 空间复杂度：O(1)。注意返回值不计入空间复杂度。
 * @param {*ListNode} l1
 * @param {*ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const pre = new ListNode(0); // 伪节点
  let cur = pre; // 指针
  let carry = 0; // 进位数
  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    cur.next = new ListNode(sum);
    cur = cur.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return pre.next;
};

const ret = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log(ret);
