## Problem

You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:

Input: Binary tree: [1,2,3,4]

             1
           /   \
          2     3
         /
        4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".

Example 2:

Input: Binary tree: [1,2,3,null,4]

                  1
                /   \
               2     3
                \
                 4

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.

## Pre analysis

Will do a recursive tree walk (preorder)

## Another Solution

Iterative Approach

     var tree2str = function(t) {
     // console.log(t)

     if (!t || !t.val === null)
          return ""

     let stack = []
     stack.push(t)

     let visited = new Set()

     let output = ""

     while (stack.length > 0) {
          const c = stack.slice(-1)[0]

          if (visited.has(c)) {
               stack.pop()
               output += ')'
          } else {
               output += `(${c.val}`
               visited.add(c)

               if (c.left === null && c.right !== null) {
                    output += `()`
               }

               if (c.right) {
                    stack.push(c.right)
               }

               if (c.left) {
                    stack.push(c.left)
               }
          }

     }

     return output.slice(1, -1)

     };
