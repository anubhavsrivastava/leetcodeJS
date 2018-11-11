/**
 * @param {string[]} logs
 * @return {string[]}
 */
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
	var strings = [];
	var numbers = [];

	logs.forEach(function(logEntry) {
		var candidateIndex = logEntry.indexOf(' ');
		var logContent = [logEntry.substr(0, candidateIndex), logEntry.substr(candidateIndex + 1)];
		if (Number.isInteger(+logContent[1][0])) {
			numbers.push(logContent);
		} else {
			strings.push(logContent);
		}
	});

	strings.sort(function(logEntryA, logEntryB) {
		if (logEntryA[1] > logEntryB[1]) {
			return 1;
		} else if (logEntryA[1] < logEntryB[1]) {
			return -1;
		} else {
			return 0;
		}
	});

	return [...strings, ...numbers].map(t => {
		return t[0] + ' ' + t[1];
	});

	//     return logs.sort((a,b)=>{
	//        let aContent = a.split(' ')[1];
	//         let bContent = b.split(' ')[1];
	//         if((+aContent).toString()==="NaN" || (+bContent).toString()==="NaN") {
	//             return 1;
	//         }
	//        return aContent - bContent
	//     });
};
