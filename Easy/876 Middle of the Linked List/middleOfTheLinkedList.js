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
var middleNode = function(head) {
	let iterator = head;
	let indice = [];
	while (iterator != null) {
		indice.push(iterator);
		iterator = iterator.next;
	}

	return indice[Math.floor(indice.length / 2)];
};
