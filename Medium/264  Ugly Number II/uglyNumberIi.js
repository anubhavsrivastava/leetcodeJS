/**
 * @param {number} n
 * @return {number}
 */

var ugly = { 0: 1 };
var lastIndex = 1;
var series = { 2: 0, 3: 0, 5: 0 };
var next2 = 2, next3 = 3, next5 = 5;
var nthUglyNumber = function (n) {
    if (ugly[n - 1]) return ugly[n - 1]
    for (let i = lastIndex; i <= n; i++) {

        ugly[i] = Math.min(next2, next3, next5);
        lastIndex++;
        if (next2 === ugly[i]) {
            series[2] += 1;
        }
        if (next3 === ugly[i]) {
            series[3] += 1;
        }
        if (next5 === ugly[i]) {
            series[5] += 1;
        }
        next2 = 2 * ugly[series[2]];
        next3 = 3 * ugly[series[3]];
        next5 = 5 * ugly[series[5]];

    }
    return ugly[n - 1];
};
