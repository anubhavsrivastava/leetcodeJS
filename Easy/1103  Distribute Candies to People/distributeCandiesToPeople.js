/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
	let peep = new Array(num_people).fill(0);
	let c = 0;

	for (let i = 0; candies > 0; i++) {
		let c = candies - (i + 1) > 0 ? i + 1 : candies;
		peep[i % num_people] += c;
		candies -= c;
	}

	return peep;
};
