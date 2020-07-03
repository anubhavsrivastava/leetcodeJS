/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    let set = {};
    let marr = arr.map((t, i) => { let f = (t % k + k) % k; set[f] = set[f] || 0; set[f]++; return f });
    let total = 0;
    for (let i = 0; i < marr.length; i++) {


        if (set[(k - marr[i]) % k]) {
            set[marr[i]]--;
            set[(k - marr[i]) % k]--;
            total += 2;
            if (set[marr[i]] < 0) return false;
        }

    }

    if (total === arr.length) { return true }

    return false;
};