/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  const result = [0, 0];

  const n1 = nums1.reduce((p, n) => {
    p[n] = (p[n] || 0) + 1;
    return p;
  }, {});

  const n2 = nums2.reduce((p, n) => {
    p[n] = (p[n] || 0) + 1;
    return p;
  }, {});

  Object.keys(n1).forEach((num) => {
    if (n2[num]) {
      result[0] = result[0] + n1[num];
    }
  });

  Object.keys(n2).forEach((num) => {
    if (n1[num]) {
      result[1] = result[1] + n2[num];
    }
  });

  return result;
};
