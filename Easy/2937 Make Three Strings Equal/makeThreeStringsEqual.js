/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let index = 0;
  while (index < s1.length) {
    if (s1[index] === s2[index] && s2[index] === s3[index]) {
      index++;
    } else {
      break;
    }
  }

  if (index > 0) {
    return s1.length + s2.length + s3.length - index - index - index;
  } else {
    return -1;
  }
};
