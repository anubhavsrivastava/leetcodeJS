const { writeFileSync } = require('fs');
const { join, resolve } = require('path');
const { rootPath } = require('./package.json');
const problemsStruct = require('./dirReader');
const problemDirectory = resolve(__dirname, rootPath);

const problemTableFile = resolve(problemDirectory, 'Problems.md');

let header = '## Problems Solved \n\n';

let tableHeader = `| # | Problem Name | Difficulty | Solution |
| ---- | ------------ | ---------- | ----------- |  \n`;

let ptableBody = ``;

problemsStruct.sort((a, b) => {
	return +a.problemNumber - +b.problemNumber;
});
problemsStruct.forEach(p => {
	ptableBody += `| ${p.problemNumber} |  <a href="${p.difficulty + '/' + p.name + '/' + 'Readme.md'}">${p.problemTitle}</a>| ${p.difficulty} | <a href="${p.difficulty + '/' + p.name + '/'}">Solution</a> | \n`;
});

writeFileSync(problemTableFile, `${header}${tableHeader}${ptableBody}`);
