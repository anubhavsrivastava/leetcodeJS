/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var tree = [];
var isCompleteTree = function(root) {
	if (!root) return true;
	tree = [];
	tree.push([root.val]);
	getArray(root, 1);

	let nT = [];
	tree.forEach(function(r) {
		nT.push(...r);
	});

	if (nT.indexOf(null) !== -1) {
		for (let j = nT.indexOf(null); j < nT.length; j++) {
			if (nT[j] === null) continue;
			return false;
		}
	}

	return true;
};

var getArray = function(root, order) {
	if (!root) return;

	tree[order] = tree[order] || [];
	tree[order].push(root.left ? root.left.val : null);
	tree[order].push(root.right ? root.right.val : null);

	getArray(root.left, order + 1);
	getArray(root.right, order + 1);
};
