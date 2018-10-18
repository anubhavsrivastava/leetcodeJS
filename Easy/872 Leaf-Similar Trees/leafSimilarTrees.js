/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
	function getLeafArray(tree) {
		if (!tree) {
			return [];
		}

		if (!tree.left && !tree.right) {
			return [tree.val];
		}

		return [...getLeafArray(tree.left), ...getLeafArray(tree.right)];
	}

	return getLeafArray(root1).toString() === getLeafArray(root2).toString();
};
