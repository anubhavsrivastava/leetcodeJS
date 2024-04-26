/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const nu = `${n}${2 * n}${3 * n}`.split("");

  let v = {};

  for (let i = 0; i < nu.length; i++) {
    if (nu[i] === "0" || v[nu[i]]) return false;
    v[nu[i]] = 1;
  }

  return true;
};
