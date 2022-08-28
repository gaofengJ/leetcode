function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @description 合并两个有序链表
 * @description 时间复杂度：O(n+m)。其中 n 和 m 分别为两个链表的长度。
 * @description 空间复杂度：O(1)。只需要常数的空间存放若干变量。
 * @param {ListNode} list1
 * @param {ListNode*} list2
 * @returns ListNode
 */
const mergeTwoLists = (list1, list2) => {
  const prev = new ListNode(0);
  let cur = prev;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return prev.next;
};
