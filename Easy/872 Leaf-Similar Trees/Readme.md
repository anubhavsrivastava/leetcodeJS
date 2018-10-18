## Problem

Consider all the leaves of a binary tree. From left to right order, the values of those leaves form a leaf value sequence.

          2
        /   \
       5     1
      / \   / \
     6   2 9   8
        / \
       7   4

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:

Both of the given trees will have between 1 and 100 nodes.

## Pre analysis

A simple walk over tree with pre order should give leaf, and if both array are same then it is leaf-similar tree.

## Post analysis

Need to learn in-order, pre-order, post-order traversal `#todo`

## Another solution

Another JS specific better solution

    var leafSimilar = function(root1, root2) {
        return helper(root1)===helper(root2);
    };


    var helper=function(root){
        var op=[];
        inorder(root,op);
        return op.join(",");
    }

    var inorder=function(root,op){
        if(!root){
            return;
        }
        if(!root.left && !root.right){
            op.push(root.val);
        }
        inorder(root.left,op);
        inorder(root.right,op);
    }
