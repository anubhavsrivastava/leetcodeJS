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
	ptableBody += `| ${p.problemNumber} |  <a href="${p.difficulty + '/' + p.name + '/' + 'Readme.md'}">${p.problemTitle}</a>| ${p.difficulty} | Solution | \n`;
});

// | prop               | type            | description                                 | default value |
// | ------------------ | --------------- | ------------------------------------------- | ------------- |
// | children (default) | --              | Inner children for selfFocus Component      | `null`        |
// | tag                | htmlTag(String) | Component/Node to be rendered for focussing | `div`         |
// | className          | string          | additional Classname for particular div     | `<empty>`     |
// | tabIndex           | string/number   | tabbable order - 0/-1                       | `0`           |

writeFileSync(problemTableFile, `${header}${tableHeader}${ptableBody}`);
