/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	let xAxis = 0;
	let yAxis = 0;

	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === 'L') {
			xAxis--;
			continue;
		}
		if (moves[i] === 'R') {
			xAxis++;
			continue;
		}
		if (moves[i] === 'U') {
			yAxis++;
			continue;
		}
		if (moves[i] === 'D') {
			yAxis--;
			continue;
		}
	}

	return xAxis === 0 && yAxis === 0;
};
