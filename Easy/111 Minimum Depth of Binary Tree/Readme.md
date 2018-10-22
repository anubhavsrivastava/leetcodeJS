## Problem

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7

return its minimum depth = 2.

## Pre analysis

Recursive solution should help here.

## Post analysis

Was not simple as it looked, consider level 5 tree with all left nodes.

## Another solution

The idea is to do Level order traversal and mantain the height of each node. The moment we find the first leaf node, we return the height.

    var minDepth = function(root){
      if(!root) return 0;
      let queue = [];
      queue.push(root);
      queue.push(null);
      let levelOrder = 1;
      while(queue.length > 0){
        let current = queue.shift();
        if(current){
          if(!current.left && !current.right){
            return levelOrder;
          }
          if(current.left) queue.push(current.left);
          if(current.right) queue.push(current.right);
        } else {
          if(queue.length > 0) {
            queue.push(null);
            levelOrder++;
          }
        }
      }
    };
