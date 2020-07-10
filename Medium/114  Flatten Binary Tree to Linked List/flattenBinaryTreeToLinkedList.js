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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let o = root
    if (!o) { return o }
    if (o.left) {
        var l = flatten(o.left);
        var r = o.right;
        o.right = l;
        while (l && l.right) {
            l = l.right
        }
        l.right = r;
        o.left = null;
    }
    if (o.right) {
        o.right = flatten(o.right)
    }

    return root

};