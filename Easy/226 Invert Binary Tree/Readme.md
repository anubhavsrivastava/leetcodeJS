## Problem

Invert a binary tree.

Example:

Input:

        4
      /   \
     2     7
    / \   / \
    1   3 6   9

Output:

        4
      /   \
     7     2
    / \   / \
    9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f\*\*\* off.

## Pre analysis

Will take simple recursive approach to manipulate

## Post analysis

Addition check wasn't required for checking root.left/root.right

## Another solution

BFS

    var invertTree = function(root) {
     if (!root) return null;

     let queue = [root];

     while (queue.length > 0) {

        const node = queue.shift(); // use pop() then DFS, use shift() BFS

        [node.left, node.right] = [node.right, node.left]; // swap, Destructuring assignment if you don't know take a look!

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
     }
        return root;
    };

DFS

    var invertTree = function(root) {
    if (!root) return null;

    let stack = [root];

    while (stack.length > 0) {

        const node = stack.pop();

        [node.left, node.right] = [node.right, node.left];

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        }
            return root;
      };
