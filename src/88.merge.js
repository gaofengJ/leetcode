/**
 * @description 合并两个有序数组
 * @field 数组，逆向双指针
 * @description 时间复杂度：O(m + n)。指针移动单调递减，最多移动 m+n 次，因此时间复杂度为 O(m+n)。
 * @description 空间复杂度：O(1)。直接对数组nums1原地修改，不需要额外空间。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      nums1[p1 + p2 + 1] = nums2[p2];
      p2 -= 1;
    } else if (p2 === -1) {
      nums1[p1 + p2 + 1] = nums1[p1];
      p1 -= 1;
    } else if (nums1[p1] > nums2[p2]) {
      nums1[p1 + p2 + 1] = nums1[p1];
      p1 -= 1;
    } else {
      nums1[p1 + p2 + 1] = nums2[p2];
      p2 -= 1;
    }
  }
};
