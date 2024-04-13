/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let h = {};
  const l = Math.max(nums1.length, nums2.length, nums3.length);

  for (let i = 0; i < l; i++) {
    if (nums1[i] !== undefined) {
      h[nums1[i]] ??= new Set();
      h[nums1[i]].add(1);
    }
    if (nums2[i] !== undefined) {
      h[nums2[i]] ??= new Set();
      h[nums2[i]].add(2);
    }
    if (nums3[i] !== undefined) {
      h[nums3[i]] ??= new Set();
      h[nums3[i]].add(3);
    }
  }

  return Object.entries(h)
    .filter(([_, c]) => c.size > 1)
    .map(([n]) => n);
};
