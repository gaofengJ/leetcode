function qSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}

/**
 * @field 二分
 * @description 寻找两个有序数组的中位数（合并后排序）
 * @description 时间复杂度：O(m + n)。
 * @description 空间复杂度：O(m + n)。
 * @param {*Array} nums1
 * @param {*Array} nums2
 * @returns number
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let nums = nums1.concat(nums2);
  nums = qSort(nums);
  const len = nums.length;
  const midIndex = Math.floor(len / 2);
  if (len % 2) {
    return nums[midIndex];
  }
  return ((nums[midIndex - 1]) + nums[midIndex]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
