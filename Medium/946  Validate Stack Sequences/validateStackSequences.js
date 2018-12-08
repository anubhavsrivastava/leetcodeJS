/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
	let stack = [];

	while (pushed.length !== 0) {
		if (stack.length && stack[stack.length - 1] === popped[0]) {
			popped.shift();
			stack.pop();
		} else {
			stack.push(pushed[0]);
			pushed.shift();
		}
	}
	if (stack.reverse().toString() === popped.toString()) {
		return true;
	}
	return false;
};
