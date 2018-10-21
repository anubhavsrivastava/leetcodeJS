/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	let iterator = head;
	while (iterator != null) {
		if (iterator.next && iterator.val === iterator.next.val) {
			iterator.next = iterator.next.next;
		} else {
			iterator = iterator.next;
		}
	}
	return head;
};
