/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
	let visitedCount = {};
	cpdomains.forEach(d => {
		let [count, site] = d.split(' ');
		let entryCount = +count;
		let siteArray = site.split('.');
		while (siteArray.length) {
			const entry = siteArray.join('.');
			visitedCount[entry] = visitedCount[entry] ? visitedCount[entry] + entryCount : entryCount;
			siteArray.shift();
		}
	});
	return Object.keys(visitedCount).map(d => visitedCount[d].toString() + ' ' + d);
};
