## Problem

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

return its depth = 3.

## Pre analysis

Will take a recursive approach to solve this. Will find max of depth of left and right.

## Another solution

Using DFS

    var maxDepth = function(root) {
        let max = 0;

      function dfs(node, depth) {
        if (!node) max = Math.max(max, depth);
        else {
          dfs(node.left, depth + 1);
          dfs(node.right, depth + 1);
        }
      }

      dfs(root, max);
      return max;
    };
