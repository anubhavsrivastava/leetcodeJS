/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const result = [];

  const n = operations.length;
  for (let i = 0; i < n; i++) {
    if (operations[i] === "D") {
      result.push(2 * result[result.length - 1]);
      continue;
    }
    if (operations[i] === "C") {
      result.pop();
      continue;
    }
    if (operations[i] === "+") {
      result.push(
        (result[result.length - 1] || 0) + (result[result.length - 2] || 0)
      );
      continue;
    }

    result.push(+operations[i]);
  }

  return result.reduce((p, n) => p + n, 0);
};
