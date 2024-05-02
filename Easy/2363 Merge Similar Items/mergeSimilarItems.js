/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const i1 = Object.fromEntries(items1);

  for (let i = 0; i < items2.length; i++) {
    i1[items2[i][0]] = (i1[items2[i][0]] ?? 0) + items2[i][1];
  }

  return Object.entries(i1);
};
