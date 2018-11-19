/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
	if (!t) return '';
	let l = tree2str(t.left);
	let r = tree2str(t.right);

	return `${t.val}${l || r ? '(' + l + ')' : ''}${r ? '(' + r + ')' : ''}`;
};
