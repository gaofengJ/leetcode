/**
 * @description 两个数组的交集 II
 * @field 数组，哈希表
 * @description 时间复杂度：O(m + n)。其中 m 和 n 分别是两个数组的长度。
 * @description 空间复杂度：O(min(m, n))。其中 m 和 n 分别是两个数组的长度。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const shortArr = len1 > len2 ? nums2 : nums1;
  const longArr = len1 > len2 ? nums1 : nums2;
  const tempObj = {};
  const ret = [];
  for (let i = 0; i < shortArr.length; i++) {
    if (tempObj[shortArr[i]]) {
      tempObj[shortArr[i]] += 1;
    } else {
      tempObj[shortArr[i]] = 1;
    }
  }
  for (let i = 0; i < longArr.length; i++) {
    if (tempObj[longArr[i]]) {
      ret.push(longArr[i]);
      tempObj[longArr[i]] -= 1;
    }
  }
  return ret;
};
