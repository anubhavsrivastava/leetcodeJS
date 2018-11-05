/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var populateAverage = function(sum, root, level) {
	if (!root) return;
	sum[level] = sum[level] || [];
	sum[level].push(root.val);

	populateAverage(sum, root.left, level + 1);
	populateAverage(sum, root.right, level + 1);
};

var averageOfLevels = function(root) {
	let sum = [];
	populateAverage(sum, root, 0);

	return sum.map(a => a.reduce((a, n) => a + n) / a.length);
};
