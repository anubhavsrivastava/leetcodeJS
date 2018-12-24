const puppeteer = require('puppeteer');
const url = require('url');

module.exports = {
	extract: async leetCodeProblemURL => {
		const UrlObj = url.parse(leetCodeProblemURL);

		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		await page.setViewport({ width: 1920, height: 926 });
		await page.goto(leetCodeProblemURL);

		let result;
		await page.waitFor('body').then(async () => {
			const isSPA = await page.evaluate(() => document.querySelectorAll('#app') && document.querySelectorAll('#app').length);
			// This is SPA with either React/Vue/
			if (isSPA) {
				result = await page.waitFor('div[diff]').then(async () => {
					console.log('Main content loaded for SPA. Evaluating...');
					let problemData = await page.evaluate(
						async ({ UrlObj }) => {
							let result = {};
							let order1Difficulty = document.querySelectorAll('div[diff]');

							if (order1Difficulty.length) {
								result.difficulty = order1Difficulty[0].getAttribute('diff');
							} else {
								result.difficulty = document.querySelectorAll('span[data-diff]')[0].getAttribute('data-diff');
							}

							let order1Description = document.querySelectorAll("div[class^='description'] >div");
							if (order1Description.length) {
								result.completeProblemName = order1Description[0].firstElementChild.innerText;
								result.question = order1Description[1].innerText;
							} else {
								result.completeProblemName = document.querySelectorAll(`a[href="${UrlObj.pathname}"]`)[0].innerText;
								result.question = document.querySelectorAll('div[role="tabpanel"] div div')[0].innerText;
							}

							// problemName: "872.↵Leaf-Similar Trees"
							let problemArr = result.completeProblemName.split('\n');
							result.problemName = problemArr[1] || problemArr[0].split('.')[1];
							result.problemNumber = problemArr[0].split('.')[0];
							return result;
						},
						{
							UrlObj
						}
					);
					return problemData;
					// console.log(problemData);
				});
			} else {
				result = await page.waitFor('.difficulty-label').then(async () => {
					console.log('Main content loaded. Evaluating...');
					let problemData = await page.evaluate(
						async ({ UrlObj }) => {
							let result = {};
							result.difficulty = document.querySelectorAll('.difficulty-label')[0].innerText;
							result.completeProblemName = document.querySelectorAll('.question-title .row h3')[0].innerText;
							// problemName: "872. Leaf-Similar Trees"
							let problemArr = result.completeProblemName.split('. ');
							result.problemName = problemArr[1];
							result.problemNumber = problemArr[0];
							result.question = document.querySelectorAll('.question-content div div')[0].innerText;
							return result;
						},
						{
							UrlObj
						}
					);
					// console.log(problemData);

					return problemData;
				});
			}
		});

		browser.close();
		return result;
	}
};
