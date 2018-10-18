/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function(t1, t2) {
	if (!t1 && !t2) {
		return [];
	}

	return mergeSubTrees(t1, t2);
};

var mergeSubTrees = function(t1, t2) {
	if (!t1 && !t2) {
		return null;
	}
	if (!t1) {
		return t2;
	}
	if (!t2) {
		return t1;
	}

	let result = new TreeNode(t1.val + t2.val);
	result.left = mergeSubTrees(t1.left, t2.left);
	result.right = mergeSubTrees(t1.right, t2.right);
	return result;
};
