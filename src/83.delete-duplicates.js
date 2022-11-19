function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * 删除排序链表中的重复元素
 * @description 时间复杂度： O(n)。
 * @description 空间复杂度：O(n)。
 * @field 迭代，哈希表
 * @param {ListNode} head
 * @returns
 */
const deleteDuplicates = (head) => {
  if (!head) return null;
  const map = new Map();
  let cur = head;
  map.set(cur.val);
  while (cur && cur.next) {
    if (map.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      map.set(cur.next.val, 1);
      cur = cur.next;
    }
  }
  return head;
};

/**
 * 删除排序链表中的重复元素(关键字：已排序)
 * @description 时间复杂度： O(n)。
 * @description 空间复杂度：O(1)。
 * @field 迭代，哈希表
 * @param {ListNode} head
 * @returns
 */
const deleteDuplicates = (head) => {
  if (!head) return null;
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
