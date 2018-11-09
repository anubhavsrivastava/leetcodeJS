/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
	let five = 0,
		ten = 0;

	for (let i = 0; i < bills.length; i++) {
		let current = bills[i];

		if (current === 5) {
			five++;
			continue;
		}

		if (current === 10) {
			if (five) {
				five--;
				ten++;
			} else {
				return false;
			}
		}

		if (current === 20) {
			if (five && ten) {
				five--;
				ten--;
			} else if (five && five > 2) {
				five -= 3;
			} else {
				return false;
			}
		}
	}
	return true;
};
