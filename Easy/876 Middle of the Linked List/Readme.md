## Problem

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5]

Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3. (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:

Input: [1,2,3,4,5,6]

Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:

The number of nodes in the given list will be between 1 and 100.

## Pre analysis

To know the length, O(n) would be least required. Will keep additional space for storing node;
This will take additional space but would be better than iterating again half way down

## Post analysis

## Another solution

1.  Iterating again solution

        var middleNode = function(head) {
            let node = head;
            let counter = 0;

            while(node) {
                counter++;
                node = node.next;
            }

            counter = Math.floor(counter / 2);

            for(let i = 0; i < counter; i++) {
                head = head.next;
            }

            return head;

        };

Complexity Analysis

Time Complexity: O(N^2), where N is the number of nodes in the given list.

Space Complexity: O(1), the space used by A.

2.  slow-fast pointers

        var middleNode = function(head) {
        let slow = head;
        let fast =head;

        while(fast.next){
            console.log(slow.next)
            slow=slow.next;
            fast= fast.next.next? fast.next.next: fast.next;
        }
        return slow;

        };

Complexity Analysis

Time Complexity: O(N), where N is the number of nodes in the given list.

Space Complexity: O(1), the space used by slow and fast.
