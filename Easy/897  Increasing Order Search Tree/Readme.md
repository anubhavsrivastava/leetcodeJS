## Problem

Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

             5
            / \
           3    6
         /  \    \
        2    4    8
       /         / \
      1         7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

     1
      \
       2
        \
         3
          \
           4
            \
             5
              \
               6
                \
                 7
                  \
                   8
                    \
                     9

Note:

The number of nodes in the given tree will be between 1 and 100.

Each node will have a unique integer value from 0 to 1000.

## Pre analysis

Will do in-order traverse and convert it into array and resultant in tree again

## Another Solution

Concise version without additional space

    var increasingBST = function(root) {
      return dfs(root);
    };

    function dfs(node, parent) {
      if (!node) return parent;
      let result = dfs(node.left, node);
      node.right = dfs(node.right, parent);
      node.left = null;
      return result;
    }
