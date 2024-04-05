/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (bp) {
  let used = 0;

  for (let i = 0; i < bp.length; i++) {
    if (bp[i] > used) {
      used++;
    }
  }

  return used;
};
