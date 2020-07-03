/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {

    let map = {};
    if (N == 0) return cells;
    N = N % 14 == 0 ? 14 : N % 14;

    let step = [...cells]
    for (let i = 0; i < N; i++) {
        step = getNextStep(step);
        map[step] = i;

    }
    return step.split('');
};

var getNextStep = function (n) {

    let a = [];

    for (let i = 0; i < n.length; i++) {
        a.push(Number(!!(n[i - 1] === n[i + 1])))
    }

    return a.join('');

}