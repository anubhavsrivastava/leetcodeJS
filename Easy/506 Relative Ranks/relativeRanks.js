/**
 *
 * @param {number} n
 * @returns {string}
 */
const getLabels = (n) => {
  return (
    {
      1: "Gold Medal",
      2: "Silver Medal",
      3: "Bronze Medal",
    }[n] || n.toString()
  );
};

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let ranks = [...score]
    .sort((a, b) => b - a)
    .reduce((p, n, i) => {
      p[n] = getLabels(i + 1);
      return p;
    }, {});

  return score.map((s) => ranks[s]);
};
