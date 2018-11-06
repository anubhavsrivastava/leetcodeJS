var RecentCounter = function() {
	this.timings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
	this.timings.push(t);
	let firstIndex = this.timings.findIndex(t2 => t - t2 <= 3000);
	let result = this.timings.length - firstIndex;
	this.timings.splice(0, firstIndex - 1);
	return result;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */
