function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 环形链表
 * @field 遍历
 * @param {ListNode} head 
 * @returns 
 */
const hasCycle = (head) => {
  const arr = [];
  while (head) {
    console.log(arr, head);
    if (arr.includes(head)) {
      return true;
    }
    arr.push(head);
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
