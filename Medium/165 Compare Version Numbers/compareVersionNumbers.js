/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v = version1.split(".");
  const v2 = version2.split(".");

  let l = Math.max(v.length, v2.length);
  for (let i = 0; i < l; i++) {
    v[i] = v[i] || "0";
    v2[i] = v2[i] || "0";

    if (+v[i] < +v2[i]) return -1;
    if (+v[i] > +v2[i]) return 1;
  }

  return 0;
};
