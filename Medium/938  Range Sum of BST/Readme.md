## Problem

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15

Output: 32

Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10

Output: 23

Note:

The number of nodes in the tree is at most 10000.

The final answer is guaranteed to be less than 2^31.

## Pre analysis

If node value falls between the range, function should return this.val and sum of children, else should return sum of children with same condition

## Another solution

1.  Iterative Solution

        var rangeSumBST = function(root, L, R) {
        // It basically means sum all values b/w L and R (inclusive)
        var treeStack = [root];
        var sum = 0;

        while(treeStack.length) {
            let node = treeStack.pop();
            if(node.val >= L && node.val <= R) {
            sum += node.val;
            }

            if(node.left !== null && node.val >= L) {
            treeStack.push(node.left);
            }

            if(node.right !== null && node.val <= R) {
            treeStack.push(node.right);
            }
        }
        return sum;
        };
