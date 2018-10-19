const scrapper = require('./scrapper');
const { rootPath } = require('./package.json');
const { stat, mkdirSync, writeFileSync, readFileSync } = require('fs');
const { join, resolve } = require('path');

var arguments = process.argv.slice(2);
if (!arguments.length) {
	console.log('Need a leetcode problem URL; eg. https://leetcode.com/problems/search-in-a-binary-search-tree/ ');
	process.exit(0);
}
let leetCodeProblemURL = arguments[0];
const problemDirectory = resolve(__dirname, rootPath);

function checkOrCreateDirectory(directory) {
	return new Promise((resolve, reject) => {
		stat(directory, (err, stats) => {
			if (err) {
				// console.log("Directory doesn't exists. Creating...");
				mkdirSync(directory, 0766, function(err) {
					if (err) {
						throw err;
					}
					setTimeout(() => resolve(directory), 3000);
				});
			} else {
				// console.log('Directory already exists...');
			}
			resolve(directory);
		});
	});
}

scrapper.extract(leetCodeProblemURL).then(r => {
	const directoryToCreate = resolve(problemDirectory, r.difficulty.charAt(0).toUpperCase() + r.difficulty.substr(1).toLowerCase());
	const problemDirectoryToCreate = resolve(directoryToCreate, `${r.problemNumber} ${r.problemName}`);
	const readmeFileToCreate = resolve(problemDirectoryToCreate, 'Readme.md');
	const solutionFileName = r.problemName
		.split('-')
		.join(' ')
		.split(' ')
		.map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase())
		.join('');
	const solutionFileToCreate = resolve(problemDirectoryToCreate, solutionFileName.charAt(0).toLowerCase() + solutionFileName.substr(1) + '.js');

	return checkOrCreateDirectory(directoryToCreate).then(() => {
		checkOrCreateDirectory(problemDirectoryToCreate)
			.then(() => {
				writeFileSync(readmeFileToCreate, `## Problem\n\n${r.question}\n\n## Pre analysis\n\n## Post analysis\n\n## Another solution`);
				writeFileSync(solutionFileToCreate, `//solution`);
				console.log('All Done!!!');
			})
			.catch(err => {
				console.log('Unexpected error has occurred', err);
				throw err;
			});
	});
});
