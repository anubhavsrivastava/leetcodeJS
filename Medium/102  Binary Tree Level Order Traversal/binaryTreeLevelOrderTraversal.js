/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let result = [];
    levelOrderBottomArray(result, root, 1);
    return result.filter(t => t);
}
var levelOrderBottomArray = function (result, root, order) {
    if (!root || root.val === undefined) {
        return null;
    }
    result[order] = result[order] || [];
    result[order].push(root.val);
    levelOrderBottomArray(result, root.left, order + 1);
    levelOrderBottomArray(result, root.right, order + 1);
};
