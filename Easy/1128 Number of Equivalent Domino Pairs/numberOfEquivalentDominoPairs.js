/**
 * @param {number[][]} dominoes
 * @return {number}
 */

const hash = ([a, b]) => {
  if (a < b) {
    return `${a}-${b}`;
  } else {
    return `${b}-${a}`;
  }
};
var numEquivDominoPairs = function (d) {
  const h = {};
  let p = 0;
  for (let i = 0; i < d.length; i++) {
    let ha = hash(d[i]);
    if (h[ha]) {
      p = p + h[ha];
      h[ha] = h[ha] + 1;
    } else {
      h[ha] = 1;
    }
  }

  return p;
};
