/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	let unique = new Set();

	emails.forEach(e => {
		let emailGroup = e.split('@');
		let lname = emailGroup[0]
			.split('+')[0]
			.split('.')
			.join('');

		unique.add(lname + '@' + emailGroup[1]);
	});

	return unique.size;
};
