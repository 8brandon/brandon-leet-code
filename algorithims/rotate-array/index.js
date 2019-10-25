/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  const numsCopy = [...nums];
  for (let i = 0; i < nums.length; i++) {
    nums[(i + k) % nums.length] = numsCopy[i];
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// Notes On Solution:
/**
 * We create numsCopy as a reference point, since we are modifying the passed in array in place
 * we want to keep a copy of the original version of the array.
 *
* then we set the nums[i + k] to numsCopy[i] , this will work for the ones that don't 
wrap over, but when it has wrapper over the end poing of the array, then we need to use the 
modulo operator. % to see how many it has wrapper over the array
 */
