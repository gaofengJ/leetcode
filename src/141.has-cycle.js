function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 环形链表
 * @description 时间复杂度：O(n)。其中 n 是链表中的节点数。最坏情况下我们需要遍历每个节点一次。
 * @description 空间复杂度：O(n)。其中 n 是链表中的节点数。主要为哈希表的开销，最坏情况下我们需要将每个节点插入到哈希表中一次。
 * @field 哈希表
 * @param {ListNode} head 
 * @returns 
 */
const hasCycle = (head) => {
  const map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, 1)
    head = head.next;
  }
  return false;
};

/**
 * 环形链表
 * @field 快慢指针
 * @description 时间复杂度：O(n)
 * @description 空间复杂度：O(1)
 * @param {ListNode} head 
 * @returns 
 */
const hasCycle = (head) => {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (slow.next === fast.next.next) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
