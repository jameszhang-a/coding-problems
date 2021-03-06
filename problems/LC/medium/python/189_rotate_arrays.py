"""
Given an array, rotate the array to the right by k steps, where k is non-negative.


Example 1:
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

Explanation:
rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]


Example 2:
Input: nums = [-1, -100, 3, 99], k = 2
Output: [3, 99, -1, -100]

Explanation:
rotate 1 steps to the right: [99, -1, -100, 3]
rotate 2 steps to the right: [3, 99, -1, -100]


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105


Follow up:

Try to come up with as many solutions as you can.
There are at least three different ways to solve this problem.
Could you do it in -place with O(1) extra space?
"""
from typing import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        Input:    [1,2,3,4,5,6,7], k = 3
        Output:   [5,6,7,1,2,3,4]
        """

        # * brute force method
        # Save iterations
        k %= len(nums)

        for _ in range(k):
            # moves last element to front
            prev = nums[-1]
            for j in range(len(nums)):
                nums[j], prev = prev, nums[j]

        # * pop and insert method
        # runtime: 4397 ms, memory: 25.5 MB
        for _ in range(k):
            nums.insert(0, nums.pop())
