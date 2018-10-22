/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root, considerForCount) {
	if (!root) return 0;
	if (considerForCount && !root.left && !root.right) return root.val;

	return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
