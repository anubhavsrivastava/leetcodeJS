const scrapper = require('./scrapper');

const leetCodeProblemURL = 'https://leetcode.com/problems/leaf-similar-trees/';

scrapper.extract(leetCodeProblemURL).then(r => console.log(r));
