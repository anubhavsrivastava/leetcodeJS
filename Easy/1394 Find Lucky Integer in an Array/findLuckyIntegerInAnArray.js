/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] ?? 0) + 1;
  }

  return Math.max(
    ...Object.entries(hash)
      .filter((t) => +t[0] === t[1])
      .map((t) => t[1]),
    -1
  );
};
