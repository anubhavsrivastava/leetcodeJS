const { writeFileSync } = require('fs');
const { join, resolve } = require('path');
const { rootPath } = require('./package.json');
const problemsStruct = require('./dirReader');
const problemDirectory = resolve(__dirname, rootPath);

const problemTableFile = resolve(problemDirectory, 'Problems.md');

let header = `## Problems Solved - ${problemsStruct.length}\n\n`;

let tableHeader = `| # | Problem Name | Difficulty | Solution |
| ---- | ------------ | ---------- | ----------- |  \n`;

let ptableBody = ``;

problemsStruct.sort((a, b) => {
	return +a.problemNumber - +b.problemNumber;
});
problemsStruct.forEach(p => {
	const solutionFile = p.problemTitle
		.split('-')
		.join(' ')
		.split(' ')
		.map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
		.join('');
	const solutionFileName = solutionFile.charAt(0).toLowerCase() + solutionFile.substr(1) + '.js';

	ptableBody += `| <a href="${p.difficulty + '/' + p.name + '/'}">${p.problemNumber}</a> |  <a href="${p.difficulty + '/' + p.name + '/' + 'Readme.md'}">${p.problemTitle}</a>| ${p.difficulty} | <a href="${p.difficulty + '/' + p.name + '/' + solutionFileName}">Solution</a> | \n`;
});

writeFileSync(problemTableFile, `${header}${tableHeader}${ptableBody}`);
