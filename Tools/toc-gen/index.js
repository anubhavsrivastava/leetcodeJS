const { writeFileSync } = require('fs');
const {  resolve } = require('path');
const { rootPath } = require('./package.json');
const problemsStruct = require('./dirReader');
const problemDirectory = resolve(__dirname, rootPath);

const problemTableFile = resolve(problemDirectory, 'Problems.md');

let tableHeader = `| # | Problem Name | Difficulty | Solution |
| ---- | ------------ | ---------- | ----------- |  \n`;


function generateProblemIndex(problems, fileToWrite ){
	let header = `## Problems Solved - ${problems.length}\n\n`;
	
	let ptableBody = ``;

	problems.sort((a, b) => {
		return +a.problemNumber - +b.problemNumber;
	});
	problems.forEach(p => {
		const solutionFile = p.problemTitle
			.split('-')
			.join(' ')
			.split(' ')
			.map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
			.join('');
		const solutionFileName = solutionFile.charAt(0).toLowerCase() + solutionFile.substr(1) + '.js';

		ptableBody += `| <a href="${p.difficulty + '/' + p.name + '/'}">${p.problemNumber}</a> |  <a href="${p.difficulty + '/' + p.name }">${p.problemTitle}</a>| ${p.difficulty} | <a href="${p.difficulty + '/' + p.name + '/' + solutionFileName}">Solution</a> | \n`;
	});

	return	writeFileSync(fileToWrite, `${header}${tableHeader}${ptableBody}`);

}


let difficulty = [];
problemsStruct.forEach(p => {
	if (!difficulty.includes(p.difficulty)) {
		difficulty.push(p.difficulty);
	}
});


generateProblemIndex(problemsStruct, problemTableFile);

difficulty.forEach(d => {
	let problems = problemsStruct.filter(p => p.difficulty === d);
	let fileToWrite = resolve(problemDirectory, d, "README.md");
	generateProblemIndex(problems, fileToWrite);
}
);

