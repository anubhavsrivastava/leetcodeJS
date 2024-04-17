/**
 * @param {string} s
 * @return {string}
 */
var findLatestTime = function (s) {
  const result = [];
  let [hr, mm] = s.split(":");
  let [h1, h2] = hr.split("");
  if (h1 === "?") {
    if (["0", "1", "?"].includes(h2)) {
      h1 = "1";
    } else {
      h1 = "0";
    }
  }

  if (h2 === "?") {
    if (h1 === "0") {
      h2 = "9";
    } else {
      h2 = "1";
    }
  }
  result.push(`${h1}${h2}`);

  let [m1, m2] = mm.split("");

  if (m1 === "?") {
    m1 = "5";
  }
  if (m2 === "?") {
    m2 = "9";
  }

  result.push(`${m1}${m2}`);

  return result.join(":");
};
