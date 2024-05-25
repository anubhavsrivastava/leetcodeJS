/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, q) {
  let c = {};
  let a = {};
  let result = [];
  let ctc = 0;

  for (let i = 0; i < q.length; i++) {
    if (a[q[i][0]] !== undefined) {
      c[a[q[i][0]]] = c[a[q[i][0]]] - 1;
      if (c[a[q[i][0]]] === 0) {
        ctc = ctc - 1;
      }
    }

    a[q[i][0]] = q[i][1];
    c[q[i][1]] = (c[q[i][1]] || 0) + 1;
    if (c[q[i][1]] < 2) {
      ctc++;
    }

    result.push(ctc);
  }

  return result;
};
