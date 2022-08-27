function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

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

/**
 * @description 合并K个升序链表（依次合并）
 * @field 链表
 * @description 时间复杂度：O（k²n）
 * @description 空间复杂度：O(1)
 * @param {*ListNode[][]} lists
 * @returns
 */
// const mergeKLists = (lists) => {
//   if (!lists.length) return null;
//   let res = lists[0];
//   for (let i = 1; i < lists.length; i++) {
//     res = mergeTwoLists(res, lists[i]);
//   }
//   return res;
// };

const merge = (lists, left, right) => {
  if (left === right) {
    return lists[left];
  }
  const mid = left + Math.floor((right - left) / 2);
  const list1 = merge(lists, left, mid);
  const list2 = merge(lists, mid + 1, right);
  return mergeTwoLists(list1, list2);
};

/**
 * @description 合并K个升序链表
 * @field 链表、分治
 * @description 时间复杂度：O(kn*log k)
 * @description 空间复杂度：O(logk)。递归会使用到 O(logk) 空间代价的栈空间
 * @param {*ListNode[][]} lists
 * @returns
 */
const mergeKLists = (lists) => {
  if (!lists.length) return null;
  return merge(lists, 0, lists.length - 1);
};
