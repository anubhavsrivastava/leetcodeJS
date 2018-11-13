/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
	var processBST = function(root, resultant) {
		if (!root) return;

		processBST(root.left, resultant);
		resultant.push(root.val);
		processBST(root.right, resultant);
	};

	let result = [];
	processBST(root, result);
	if (result.length === 0) return null;

	let tree = new TreeNode(result[0]);
	let head = tree;
	for (let i = 1; i < result.length; i++) {
		tree.left = null;
		tree.right = new TreeNode(result[i]);
		tree = tree.right;
	}
	return head;
};
