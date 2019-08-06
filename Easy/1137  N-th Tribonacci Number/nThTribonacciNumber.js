/**
 * @param {number} n
 * @return {number}
 */

var fib = [0, 1, 1];

var tribonacci = function fibfn(n) {
	if (fib[n] !== undefined) {
		return fib[n];
	}

	let result = fibfn(n - 2) + fibfn(n - 1) + fibfn(n - 3);
	fib[n] = result;
	return result;
};
