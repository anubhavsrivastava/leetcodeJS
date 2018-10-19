const puppeteer = require('puppeteer');
const url = require('url');

module.exports = {
	extract: async leetCodeProblemURL => {
		const UrlObj = url.parse(leetCodeProblemURL);

		const browser = await puppeteer.launch({ headless: false });
		const page = await browser.newPage();
		await page.setViewport({ width: 1920, height: 926 });
		await page.goto(leetCodeProblemURL);
		let result = await page.waitFor('main').then(async () => {
			console.log('Main content loaded. Evaluating...');
			let problemData = await page.evaluate(
				async ({ UrlObj }) => {
					let result = {};
					result.difficulty = document.querySelectorAll('span[data-diff]')[0].getAttribute('data-diff');
					result.completeProblemName = document.querySelectorAll(`a[href="${UrlObj.pathname}"]`)[0].innerText;
					// problemName: "872.↵Leaf-Similar Trees"
					let problemArr = result.completeProblemName.split('\n');
					result.problemName = problemArr[1];
					result.problemNumber = problemArr[0].split('.')[0];
					result.question = document.querySelectorAll('div[role="tabpanel"]')[0].innerText;
					return result;
				},
				{
					UrlObj
				}
			);
			return problemData;
			// console.log(problemData);
		});

		browser.close();
		return result;
	}
};
