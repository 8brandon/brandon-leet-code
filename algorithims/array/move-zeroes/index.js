/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

var moveZeroes = function(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i -= 1;
      counter += 1;
    }
  }

  for (let i = 0; i < counter; i++) {
    nums.push(0);
  }
  return nums;
};

/**
 *
 * Final and best solution.
 * Run a for loop, check if the current element is a 0.
 * If it is, push the result of splicing that index of the array to the end of the array
 * This simultaneously removes it from it's current place and adds it to the end.
 * We need to -= 1 from i, because otherwise we'd be skipping an element in the array.
 *
 */

var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i -= 1;
    }
  }
  return nums;
};

moveZeroes([0, 0, 1]);
