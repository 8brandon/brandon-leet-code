/**
 * The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
 */

/**
  * Solution notes: 
  * 
  * We have two loops in a row so time complexity would be O(n + n)
  * 
  *Our first for loop uses a set, and checks if the current element is included in the set, if it already is 
  there then we found our duplicate. And we push that into result. Otherwise we add it to the set.
  * 
  Our second loop uses a set with nums inside it. 
  If the current number, starting at 1, is not inside the set, we add it to the result, because that is our missing
  number
  */
var findErrorNums = function(nums) {
  const set = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (set.has(element)) {
      result.push(element);
    } else {
      set.add(element);
    }
  }

  const numsSet = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      result.push(i);
    }
  }
  return result;
};
