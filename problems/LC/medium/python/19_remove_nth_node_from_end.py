"""
Given the head of a linked list, 
remove the nth node from the end of the list and return its head.
 
Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 
Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
"""


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import *


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        n = 3
        fast:   1 - 2 - 3 - 4 - 5
        slow:               1 - 2 - 3 - 4 - 5

        Advance one pointer by n places
        Start advancing the other pointer
        When the first reaches the end, the second one will be at the right place
        """

        fast, slow = head, head
        for i in range(n):
            fast = fast.next

        if fast is None:
            return head.next

        while fast.next is not None:
            fast = fast.next
            slow = slow.next

        slow.next = slow.next.next

        return head
