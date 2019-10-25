/**Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321. */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**Solution Notes:
 * start with head of array. Unless it's a 9, we are just going to add one to it and return it
 * if it's a 9, then we need to make that a 0, then carry on to the next number to increment it.
 * At the end, we call unshift(1), in case our input was [9,9,9] in which case
 * everything would have been made a 0, and we need to shift in our 1, to make it a
 * [1,0,0,0]
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const element = digits[i];
    if (element < 9) {
      digits[i] = element + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
