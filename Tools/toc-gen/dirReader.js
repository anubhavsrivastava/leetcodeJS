const { rootPath } = require('./package.json');
const { lstatSync, readdirSync } = require('fs');
const { join, resolve } = require('path');
const excludedDir = ['Tools', 'node_modules'];
const problemDirectory = resolve(__dirname, rootPath);
const isDirectory = source => lstatSync(source).isDirectory();
const getProblemDirectories = source =>
	readdirSync(source)
		.filter(name => name[0] !== '.')
		.filter(name => !excludedDir.includes(name))
		.filter(name => isDirectory(join(source, name)))
		.map(name => ({ name, dir: join(source, name) }));

const problemDirs = getProblemDirectories(problemDirectory);

let allProblems = [];
problemDirs.forEach(source => {
	allProblems = allProblems.concat(
		readdirSync(source.dir)
			.filter(name => name[0] !== '.')
			.filter(name => isDirectory(join(source.dir, name)))
			.map(name => ({ name, difficulty: source.name, dir: join(source.dir, name) }))
	);
});

allProblems = allProblems.map(t => {
	let problemNumber = t.name.split(' ')[0];
	let problemTitle = t.name.substr(t.name.indexOf(' ')).trim();
	return Object.assign({}, t, { problemNumber, problemTitle });
});

module.exports = allProblems;
