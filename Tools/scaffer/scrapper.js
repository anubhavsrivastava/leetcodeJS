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
			const isSPA = await page.evaluate(() => document.querySelector('#app') && document.querySelector('#app').length);
			// This is SPA with either React/Vue/

			if (isSPA) {
				result = await page.waitFor('#main-container').then(async () => {
					console.log('Main content loaded for SPA. Evaluating...');
					let problemData = await page.evaluate(
						async ({ UrlObj }) => {
							let result = {};
							result.difficulty = document.querySelectorAll('span[data-diff]')[0].getAttribute('data-diff');
							result.completeProblemName = document.querySelectorAll(`a[href="${UrlObj.pathname}"]`)[0].innerText;
							// problemName: "872.↵Leaf-Similar Trees"
							let problemArr = result.completeProblemName.split('\n');
							result.problemName = problemArr[1];
							result.problemNumber = problemArr[0].split('.')[0];
							result.question = document.querySelectorAll('div[role="tabpanel"] div div')[0].innerText;
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
				result = await page.waitFor('.content-wrapper').then(async () => {
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
