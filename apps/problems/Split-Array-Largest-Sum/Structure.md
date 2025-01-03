Problem Name: "Maximum Pair Sum"
Description: Given a vector of integers nums, find the maximum possible sum that can be formed by any two distinct elements in the array.

Examples:
1. Input: nums = [5, 3, 2, 7, 8]
   Output: result = 15
   Explanation: The maximum sum is formed by adding 7 and 8.

2. Input: nums = [-2, 0, 1, -1]
   Output: result = 1
   Explanation: The maximum sum is formed by adding 0 and 1.

Function Name: findMaxPairSum

Input Structure:
Field: vector<int> nums

Output Structure:
Field: int result

Constraints:
- 2 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- The array will contain at least two elements

Follow-up: Can you solve it in O(n) time complexity?