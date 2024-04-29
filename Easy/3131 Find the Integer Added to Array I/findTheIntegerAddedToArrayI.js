/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  return (
    (nums2.reduce((p, n) => p + n, 0) - nums1.reduce((p, n) => p + n, 0)) /
    nums1.length
  );
};
