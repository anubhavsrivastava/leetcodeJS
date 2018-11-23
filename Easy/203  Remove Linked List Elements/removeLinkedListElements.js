/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	while (head && head.val === val) head = head.next;

	if (head) {
		let prev = head;
		let next = head.next;

		while (next !== null) {
			if (next.val === val) {
				prev.next = next = next.next;
			} else {
				prev = next;
				next = next.next;
			}
		}
	}

	return head;
};
