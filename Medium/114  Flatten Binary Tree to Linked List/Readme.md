## Problem

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

         1
        / \
       2   5
      / \   \
     3   4   6


The flattened tree should look like:

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


## Pre analysis
Will attack by problem in bottom up approach

## Another Solution

    var flatten = function(root) {
        let prev = null
        
        function moveToRight(node) {
            if(node == null) {
                return;
            }
            
            //post order
            moveToRight(node.right);
            moveToRight(node.left);
            
            //task
            node.left = null;
            node.right = prev;
            prev = node
        }
        
        moveToRight(root);
    };