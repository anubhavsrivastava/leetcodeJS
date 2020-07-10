## Problem

Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]

         1
          \
           2
          /
         3

Output: [1,2,3]

Follow up: Recursive solution is trivial, could you do it iteratively?

## Pre analysis

Solved recursively.

## Another solution

Iterative approach

var preorderTraversal = function(root) {

      let stack = [root]
      let result = [];

      while(stack.length){
         let t = stack.pop();
         result.push(t.val);
      if(t.right){
         stack.push(t.right)
      }
      if(t.left){
         stack.push(t.left)
      }

      }


      return result
      };
